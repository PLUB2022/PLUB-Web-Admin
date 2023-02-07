import styled from '@emotion/styled';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

import { Title } from '../components/AdminInfo/resetPassword';
import { TabTitle } from '../styles/Common';
import { Container } from './AdminInfo';

const data = [
  { name: 'Text', user: 26, group: 39 },
  { name: 'Text', user: 73, group: 57 },
  { name: 'Text', user: 63, group: 60 },
  { name: 'Text', user: 28, group: 70 },
  { name: 'Text', user: 31, group: 33 },
  { name: 'Text', user: 51, group: 76 },
  { name: 'Text', user: 36, group: 48 },
];

const Dashboard = () => {
  return (
    <Container id='dashboard'>
      <TabTitle>대시보드</TabTitle>
      <GridContainer>
        <GridBox>
          <Title>회원/모임 현황</Title>
          <LineChart
            margin={{ top: 0, left: -20, right: 0, bottom: 0 }}
            width={500}
            height={260}
            data={data}>
            <XAxis
              fontSize={8.75}
              dataKey='name'
              tick={{ fill: '#A3A3A3' }}
              tickSize={0}
              tickMargin={8.8}
            />
            <YAxis
              tick={{ fill: '#A3A3A3' }}
              fontSize={8.75}
              tickSize={0}
              tickMargin={8.8}
              domain={[20, 80]}
              tickCount={7}
            />
            <CartesianGrid stroke='#F0F0F0' />
            <Line
              type='monotone'
              dataKey='user'
              strokeWidth={1.75}
              stroke='#A6CEE3'
              dot={{ stroke: '#A6CEE3', strokeWidth: 4, r: 1 }}
            />
            <Line
              type='monotone'
              dataKey='group'
              strokeWidth={1.75}
              stroke='#1F78B4'
              dot={{ stroke: '#1F78B4', strokeWidth: 4, r: 1 }}
            />
          </LineChart>
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
