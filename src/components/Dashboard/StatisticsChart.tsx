import { useQuery } from 'react-query';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

import { getDashboardStats } from '../../apis/Dashboard';
import { QUERYKEY } from '../../constants/queryKey';

const StatisticsChart = () => {
  const { data: statistics } = useQuery(QUERYKEY.STATISTICS, getDashboardStats);

  return (
    <LineChart
      margin={{ top: 0, left: -20, right: 0, bottom: 0 }}
      width={500}
      height={260}
      data={statistics}>
      <XAxis
        fontSize={'0.875rem'}
        dataKey='date'
        tick={{ fill: '#A3A3A3' }}
        tickSize={0}
        tickMargin={8.8}
      />
      <YAxis
        tick={{ fill: '#A3A3A3' }}
        fontSize={'0.875rem'}
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
