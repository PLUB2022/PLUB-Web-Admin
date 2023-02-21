import { isAxiosError } from 'axios';

import { REFRESH_KEY, TOKEN_KEY } from '../constants/auth';
import { LoginResponse, LogoutResponse, UseSignIn } from '../interfaces/login';
import { removeLocalStorage, setLocalStorage } from '../utils/storage';
import { API_URLS } from './../constants/apiUrls';
import http from './instance';

export const login = async (data: UseSignIn) => {
  try {
    const {
      data: {
        data: { accessToken, refreshToken },
      },
    }: LoginResponse = await http.post({
      url: API_URLS.AUTH.LOGIN,
      data,
    });
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
    const {
      data: { data },
    }: LogoutResponse = await http.get({
      url: API_URLS.AUTH.LOGOUT,
    });
    if (data) {
      removeLocalStorage(TOKEN_KEY);
      removeLocalStorage(REFRESH_KEY);
    }
  } catch (error) {
    if (error && isAxiosError(error)) {
      return {
        isSignOutFailed: true,
        errorCode: error.response?.data.statusCode,
      };
    }
  }
  return { isSignOutFailed: false, errorCode: undefined };
};
