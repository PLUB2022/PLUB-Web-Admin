import { refresh } from './../apis/Auth';
import { TOKEN_KEY } from './../constants/auth';
import { isTokenExpired } from './istokenExpired';
import { getLocalStorage } from './storage';

export const autoRefresh = async () => {
  const token = getLocalStorage(TOKEN_KEY);
  if (isTokenExpired(token)) {
    await refresh();
  }
};
