import styled from '@emotion/styled';

import { TabTitle } from '../styles/Common';

const Members = () => {
  return (
    <Container>
      <TabTitle>회원관리</TabTitle>
    </Container>
  );
};

export default Members;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
  width: 100%;
`;
