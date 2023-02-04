import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import { Container } from '../styles/Common';

const NotLogined = () => {
  return (
    <Container id='notLogined'>
      <Header />
      <Outlet />
    </Container>
  );
};

export default NotLogined;
