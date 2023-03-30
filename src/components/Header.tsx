import styled from '@emotion/styled';

import { COLORS } from '../constants/colors';
import useControllerHeader from '../hooks/useControllHeader';

const Header = () => {
  const { isLoginPage, handleLogout } = useControllerHeader();

  return (
    <Container id={isLoginPage ? 'fix' : 'rl'}>
      <TitleBox>
        <img src='/plub_logo.svg' alt='plub_logo' />
        <Logo>관리자</Logo>
      </TitleBox>
      {!isLoginPage && (
        <AuthBox>
          <NavLink>내 정보</NavLink>
          <NavLink id='logout' onClick={handleLogout}>
            로그아웃
          </NavLink>
        </AuthBox>
      )}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24px 60px;
  &#fix {
    position: fixed;
    top: 0;
    left: 0;
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

const AuthBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const NavLink = styled.div`
  font-weight: 400;
  margin: 0px 10px;
  cursor: pointer;
  &#logout {
    font-weight: 700;
    color: ${COLORS.ERROR};
  }
`;
