import { useLocation } from 'react-router-dom';

import { menus } from '../constants/menus';

export const nowPath = (path: string) => {
  const { pathname } = useLocation();
  return pathname.includes(path) ? 'now' : '';
};

export const nowCategory = () => {
  const { pathname } = useLocation();
  const section = menus.find(({ path }) => pathname.includes(path));
  const tab = section?.tabs.find(({ path }) => pathname.includes(path));

  return {
    section: section?.section || '',
    tab: tab?.name || '',
  };
};
