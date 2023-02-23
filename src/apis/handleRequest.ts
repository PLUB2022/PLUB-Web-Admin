import { AxiosError, AxiosRequestConfig } from 'axios';

import { API_URLS } from './../constants/apiUrls';
import { REFRESH_KEY, TOKEN_KEY } from './../constants/auth';
import { ROUTES } from './../constants/routes';
import { isTokenExpired } from './../utils/istokenExpired';
import { getLocalStorage, removeLocalStorage } from './../utils/storage';
import { refresh } from './Auth';

export const handleRequest = async (config: AxiosRequestConfig) => {
  const acToken = getLocalStorage(TOKEN_KEY);
  if (config.url?.includes(API_URLS.AUTH.REFRESH)) {
    return config;
  }
  if (acToken) {
    if (isTokenExpired(acToken)) {
      const newToken = await refresh();
      if (newToken) {
        return {
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${newToken}`,
          },
        } as AxiosRequestConfig;
      } else {
        removeLocalStorage(TOKEN_KEY);
        removeLocalStorage(REFRESH_KEY);
        alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
        location.pathname = ROUTES.SIGNIN;
      }
    }
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${acToken}`,
      },
    } as AxiosRequestConfig;
  } else {
    return config;
  }
};

export const requestError = (error: AxiosError) => {
  return Promise.reject(error);
};
