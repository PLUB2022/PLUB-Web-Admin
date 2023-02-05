import styled from '@emotion/styled';

import InfoTable from '../components/AdminInfo/InfoTable';
import { TabTitle } from '../styles/Common';

const exData = {
  userId: 'ADMIN1234',
  name: '관리자',
  level: '일반관리자',
  phone: '01012345678',
};

const AdminInfo = () => {
  return (
    <Container>
      <TabTitle>관리자 정보</TabTitle>
      <InfoTable data={exData} />
    </Container>
  );
};

export default AdminInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  width: 100%;
  padding: 15px;
`;
