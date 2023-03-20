import styled from '@emotion/styled';

import { Title } from '../components/AdminInfo/resetPassword';
import DailySummary from '../components/Dashboard/DailySummary';
import InquiryReport from '../components/Dashboard/InquiryReport';
import PlubRank from '../components/Dashboard/PlubRank';
import StatisticsChart from '../components/Dashboard/StatisticsChart';

const Dashboard = () => {
  return (
    <GridContainer>
      <GridBox>
        <Title>회원/모임 현황</Title>
        <StatisticsChart />
      </GridBox>
      <GridBox>
        <Title>일자별 요약</Title>
        <DailySummary />
      </GridBox>
      <GridBox>
        <Title>문의/신고</Title>
        <InquiryReport />
      </GridBox>
      <GridBox>
        <Title>실시간 좋아요 순 플러빙</Title>
        <PlubRank />
      </GridBox>
    </GridContainer>
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
