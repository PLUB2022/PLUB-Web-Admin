import styled from '@emotion/styled';

import { TabTitle } from '../styles/Common';

const AdminInfo = () => {
  return (
    <Container>
      <TabTitle>관리자 정보</TabTitle>
      <div>아이디</div>
      <div>비밀번호</div>
      <div>이름</div>
      <div>연락처</div>
      <div>관리자 등급</div>
    </Container>
  );
};

export default AdminInfo;

const Container = styled.div`
  width: 100%;
  padding: 15px;
`;
