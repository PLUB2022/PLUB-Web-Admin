import { isAxiosError } from 'axios';

import { REFRESH_KEY, TOKEN_KEY } from '../constants/auth';
import { UseSignIn } from '../interfaces/login';
import { setLocalStorage } from '../utils/storage';
import { API_URLS } from './../constants/apiUrls';
import http from './instance';

interface LoginResponse {
  data: {
    data: {
      accessToken: string;
      refreshToken: string;
    };
  };
}

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
