import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { COLORS } from '../constants/colors';
import { menus } from '../constants/menus';
import { nowPath } from '../utils/nowPath';

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      {menus.map(({ section, path, tabs }) => (
        <Menu key={path}>
          <Section
            key={path}
            id={nowPath(path)}
            onClick={() => navigate(tabs[0]?.path || path)}>
            {section}
          </Section>
          {tabs.map(({ name, path: tabPath }) => (
            <Tab
              key={tabPath}
              id={nowPath(tabPath)}
              onClick={() => navigate(tabPath)}>
              {name}
            </Tab>
          ))}
        </Menu>
      ))}
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  width: 230px;
  margin: 0px 60px;
`;

const Menu = styled.div`
  margin: 15px 0px;
`;

const Section = styled.div`
  display: inline-block;
  padding: 8px 24px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  &#now {
    background-color: ${COLORS.SUB};
    color: ${COLORS.MAIN};
    font-weight: 700;
    border-radius: 10px;
  }
`;

const Tab = styled.div`
  padding: 8px 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &#now {
    &::before {
      content: url('/arrow.svg');
      margin-right: 10px;
    }
    color: ${COLORS.MAIN};
    font-weight: 700;
    border-radius: 10px;
  }
`;
