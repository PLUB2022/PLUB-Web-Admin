import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Text', user: 26, group: 39 },
  { name: 'Text', user: 73, group: 57 },
  { name: 'Text', user: 63, group: 60 },
  { name: 'Text', user: 28, group: 70 },
  { name: 'Text', user: 31, group: 33 },
  { name: 'Text', user: 51, group: 76 },
  { name: 'Text', user: 36, group: 48 },
];

const StatisticsChart = () => {
  return (
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
  );
};

export default StatisticsChart;
