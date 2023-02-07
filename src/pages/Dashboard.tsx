import styled from '@emotion/styled';

import { Title } from '../components/AdminInfo/resetPassword';
import { TabTitle } from '../styles/Common';
import { Container } from './AdminInfo';

const Dashboard = () => {
  return (
    <Container id='dashboard'>
      <TabTitle>대시보드</TabTitle>
      <GridContainer>
        <GridBox>
          <Title>회원/모임 현황</Title>
        </GridBox>
        <GridBox>
          <Title>일자별 요약</Title>
        </GridBox>
        <GridBox>
          <Title>문의/신고</Title>
        </GridBox>
        <GridBox>
          <Title>실시간 좋아요 순 플러빙</Title>
        </GridBox>
      </GridContainer>
    </Container>
  );
};

export default Dashboard;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 360px);
  grid-gap: 20px;
`;

const GridBox = styled.div`
  background-color: #fbfbfb;
  border-radius: 20px;
  padding: 24px;
`;
