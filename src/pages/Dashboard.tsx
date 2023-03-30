import styled from '@emotion/styled';
import { Suspense } from 'react';

import { Title } from '../components/AdminInfo/resetPassword';
import DailySummary from '../components/Dashboard/DailySummary';
import InquiryReport from '../components/Dashboard/InquiryReport';
import PlubRank from '../components/Dashboard/PlubRank';
import StatisticsChart from '../components/Dashboard/StatisticsChart';
import Loading from '../components/shared/Loading';

const Dashboard = () => {
  const dashboardMenus = [
    {
      title: '회원/모임 현황',
      component: <StatisticsChart />,
    },
    {
      title: '일자별 요약',
      component: <DailySummary />,
    },
    {
      title: '문의/신고',
      component: <InquiryReport />,
    },
    {
      title: '실시간 좋아요 순 플러빙',
      component: <PlubRank />,
    },
  ];
  return (
    <GridContainer>
      {dashboardMenus.map(({ title, component }) => (
        <GridBox key={title}>
          <Title>{title}</Title>
          <Suspense fallback={<Loading>로딩중</Loading>}>{component}</Suspense>
        </GridBox>
      ))}
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
