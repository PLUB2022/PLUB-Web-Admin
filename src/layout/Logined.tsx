import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { Container } from '../styles/Common';

const Logined = () => {
  return (
    <>
      <Header />
      <Container>
        <SideBar />
        <Outlet />
      </Container>
    </>
  );
};

export default Logined;
