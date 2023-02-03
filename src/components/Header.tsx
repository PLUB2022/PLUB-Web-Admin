import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import Button from './shared/Button';

const Header = () => {
  const navigate = useNavigate();
  const onClickLogout = () => {
    navigate('/');
  };

  return (
    <Container>
      <TitleBox>
        <Logo>PLUB</Logo>
        <Logo id='title'>Service Admin</Logo>
      </TitleBox>
      <AuthBox>
        <UserName>adminIDEx00</UserName>
        <Button width='77px' bgColor='#dc3e3e' onClick={onClickLogout}>
          로그아웃
        </Button>
      </AuthBox>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding: 0 24px;
  background-color: #d9d9d9;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 335px;
  height: 100%;
`;

const AuthBox = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Logo = styled.div`
  font-size: 32px;
  font-weight: 700;
  &#title {
    font-weight: 300;
  }
`;

const UserName = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-right: 10px;
`;
