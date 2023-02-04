import { useLocation } from 'react-router-dom';

export const nowPath = (path: string) => {
  const { pathname } = useLocation();
  return pathname.includes(path) ? 'now' : '';
};
