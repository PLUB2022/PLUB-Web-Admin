import styled from '@emotion/styled';

import InfoTable from '../components/AdminInfo/InfoTable';
import { TabTitle } from '../styles/Common';

const AdminInfo = () => {
  return (
    <Container>
      <TabTitle>관리자 정보</TabTitle>
      <InfoTable />
    </Container>
  );
};

export default AdminInfo;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 70px;
  width: 100%;
  padding: 15px;
  &#dashboard {
    gap: 40px;
  }
`;
