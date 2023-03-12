import { isAxiosError } from 'axios';

import { REFRESH_KEY, TOKEN_KEY } from '../constants/auth';
import { LoginResponse, UseSignIn } from '../interfaces/login';
import { setLocalStorage } from '../utils/storage';
import { API_URLS } from './../constants/apiUrls';
import { getLocalStorage, removeLocalStorage } from './../utils/storage';
import http from './instance';

export const login = async (data: UseSignIn) => {
  try {
    const {
      data: { accessToken, refreshToken },
    }: LoginResponse = await http.post(API_URLS.AUTH.LOGIN, data);
    accessToken && setLocalStorage(TOKEN_KEY, accessToken);
    refreshToken && setLocalStorage(REFRESH_KEY, refreshToken);
  } catch (error) {
    if (error && isAxiosError(error)) {
      return {
        isSignInFailed: true,
        errorCode: error.response?.data.statusCode,
      };
    }
  }
  return { isSignInFailed: false, errorCode: undefined };
};

export const logout = async () => {
  try {
    http.get(API_URLS.AUTH.LOGOUT);
  } catch (error) {
    if (error && isAxiosError(error)) {
      console.error(error.response);
    }
  }
  removeLocalStorage(TOKEN_KEY);
  removeLocalStorage(REFRESH_KEY);
};

export const refresh = async () => {
  const data = { refreshToken: getLocalStorage(REFRESH_KEY) };
  try {
    const {
      data: { accessToken, refreshToken },
    }: LoginResponse = await http.post(API_URLS.AUTH.REFRESH, data);

    accessToken && setLocalStorage(TOKEN_KEY, accessToken);
    refreshToken && setLocalStorage(REFRESH_KEY, refreshToken);
    return accessToken;
  } catch (error) {
    if (error && isAxiosError(error)) {
      console.error(error);
    }
  }
};
