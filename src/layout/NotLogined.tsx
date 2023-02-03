import { Outlet } from 'react-router-dom';

import { Container } from '../styles/Common';

const NotLogined = () => {
  return (
    <Container id='notLogined'>
      <Outlet />
    </Container>
  );
};

export default NotLogined;
