import { AxiosError, AxiosRequestConfig } from 'axios';

import { API_URLS } from './../constants/apiUrls';
import { REFRESH_KEY, TOKEN_KEY } from './../constants/auth';
import { ROUTES } from './../constants/routes';
import { isTokenExpired } from './../utils/istokenExpired';
import { getLocalStorage, removeLocalStorage } from './../utils/storage';
import { refresh } from './Auth';

const authenticatedConfig = (config: AxiosRequestConfig, token: string) => {
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    },
  } as AxiosRequestConfig;
};

export const handleRequest = async (config: AxiosRequestConfig) => {
  const acToken = getLocalStorage(TOKEN_KEY);
  if (config.url?.includes(API_URLS.AUTH.REFRESH)) {
    return config;
  }
  if (acToken) {
    if (isTokenExpired(acToken)) {
      const newToken = await refresh();
      if (newToken) return authenticatedConfig(config, newToken);
      else {
        removeLocalStorage(TOKEN_KEY);
        removeLocalStorage(REFRESH_KEY);
        location.pathname = ROUTES.SIGNIN;
      }
    }
    return authenticatedConfig(config, acToken);
  } else {
    return config;
  }
};

export const requestError = (error: AxiosError) => {
  return Promise.reject(error);
};
