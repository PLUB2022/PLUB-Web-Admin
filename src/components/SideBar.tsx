import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { menus } from '../constants/menus';
import { nowPath } from '../utils/nowPath';

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      {menus.map(({ name, path }) => (
        <Menu key={path} id={nowPath(path)} onClick={() => navigate(path)}>
          {name}
        </Menu>
      ))}
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  background-color: #f1f1f1;
  width: 210px;
  height: 100vh;
`;

const Menu = styled.div`
  padding: 13px 24px;
  width: 100%;
  font-size: 14px;
  border-bottom: 1px solid #bebebe;
  &:hover {
    background-color: #d9d9d9;
  }
  &#now {
    font-weight: 700;
  }
`;
