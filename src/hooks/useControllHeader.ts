import { useLocation } from 'react-router-dom';

import { logout } from './../apis/Auth';
import { ROUTES } from './../constants/routes';

const useControllerHeader = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === ROUTES.SIGNIN;

  const handleLogout = async () => {
    logout();
    location.pathname = ROUTES.SIGNIN;
  };

  return { isLoginPage, handleLogout };
};

export default useControllerHeader;
