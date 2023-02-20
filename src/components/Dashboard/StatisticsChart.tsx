import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

import useGetStatistics from '../../hooks/useGetStatistics';

const StatisticsChart = () => {
  const { statistics, isLoading } = useGetStatistics();

  if (isLoading || !statistics) return <div>로딩중</div>;
  return (
    <LineChart
      margin={{ top: 0, left: -20, right: 0, bottom: 0 }}
      width={500}
      height={260}
      data={statistics}>
      <XAxis
        fontSize={8.75}
        dataKey='date'
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
        dataKey='accounts'
        strokeWidth={1.75}
        stroke='#A6CEE3'
        dot={{ stroke: '#A6CEE3', strokeWidth: 4, r: 1 }}
      />
      <Line
        type='monotone'
        dataKey='plubbings'
        strokeWidth={1.75}
        stroke='#1F78B4'
        dot={{ stroke: '#1F78B4', strokeWidth: 4, r: 1 }}
      />
    </LineChart>
  );
};

export default StatisticsChart;
