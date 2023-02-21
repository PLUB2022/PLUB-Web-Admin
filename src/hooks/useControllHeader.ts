import { useLocation, useNavigate } from 'react-router-dom';

import { logout } from './../apis/Auth';
import { ROUTES } from './../constants/routes';

const useControllerHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isLoginPage = pathname === '/';

  const handleLogout = async () => {
    const { isSignOutFailed } = await logout();
    if (isSignOutFailed) {
      alert('로그아웃에 실패했습니다.');
      return;
    }
    navigate(ROUTES.SIGNIN);
  };

  return { isLoginPage, handleLogout };
};

export default useControllerHeader;
