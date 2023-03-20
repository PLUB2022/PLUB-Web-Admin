import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { Container, TabTitle } from '../styles/Common';
import { nowCategory } from '../utils/nowPath';

const Logined = () => {
  const { section, tab } = nowCategory();

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
