import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { ROUTES } from '../constants/routes';
import { Container, TabTitle } from '../styles/Common';
import { autoRefresh } from '../utils/autoRefresh';
import { nowCategory } from '../utils/nowPath';
import { isLogin } from '../utils/storage';

const Logined = () => {
  const navigate = useNavigate();
  const { section, tab } = nowCategory();

  useEffect(() => {
    const interval = setInterval(autoRefresh, 1000 * 60 * 5);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    !isLogin() && navigate(ROUTES.SIGNIN);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <SideBar />
        <Content>
          <TabTitle>
            {tab || section}
            {tab && <TabTitle id='sub'>&nbsp;/ {section}</TabTitle>}
          </TabTitle>
          <Outlet />
        </Content>
      </Container>
    </>
  );
};

export default Logined;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  padding: 15px 20px;
`;
