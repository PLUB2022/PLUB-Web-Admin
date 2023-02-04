import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { TOKEN_KEY } from '../constants/auth';
import { getLocalStorage } from '../utils/storage';
import Button from './shared/Button';

const Header = () => {
  const isLogin = getLocalStorage(TOKEN_KEY);
  const navigate = useNavigate();
  const onClickLogout = () => {
    navigate('/');
  };

  return (
    <Container>
      <TitleBox>
        <img src='/plub_logo.svg' alt='plub_logo' />
        <Logo>관리자</Logo>
      </TitleBox>
      {isLogin && (
        <AuthBox>
          <UserName>adminIDEx00</UserName>
          <Button width='77px' bgColor='#dc3e3e' onClick={onClickLogout}>
            로그아웃
          </Button>
        </AuthBox>
      )}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px 62px;
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

const UserName = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-right: 10px;
`;
