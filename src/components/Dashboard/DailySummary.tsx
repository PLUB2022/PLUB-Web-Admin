import styled from '@emotion/styled';

import { COLORS } from '../../constants/colors';

const summaryData = [
  {
    date: '2022-01-07',
    meeting: 10,
    member: 10,
    inquiry: 0,
    report: 0,
  },
  {
    date: '2022-01-08',
    meeting: 12,
    member: 12,
    inquiry: 0,
    report: 0,
  },
  {
    date: '2022-01-09',
    meeting: 14,
    member: 14,
    inquiry: 0,
    report: 0,
  },
  {
    date: '2022-01-10',
    meeting: 15,
    member: 16,
    inquiry: 0,
    report: 0,
  },
  {
    date: '2022-01-11',
    meeting: 17,
    member: 23,
    inquiry: 0,
    report: 0,
  },
];

const DailySummary = () => {
  return (
    <Table>
      <tbody>
        <Tr>
          <Td id='date'>일자</Td>
          <Td>모임 수</Td>
          <Td>가입자 수</Td>
          <Td>문의 수</Td>
          <Td>신고 수</Td>
        </Tr>
        {summaryData.map((data) => (
          <Tr key={data.date}>
            <Td id='date'>{data.date}</Td>
            <Td>{data.meeting}</Td>
            <Td>{data.member}</Td>
            <Td>{data.inquiry}</Td>
            <Td>{data.report}</Td>
          </Tr>
        ))}
        <Tr id='weekTotal'>
          <Td id='date'>최근 7일 합계</Td>
          <Td>{summaryData.reduce((prev, cur) => prev + cur.meeting, 0)}</Td>
          <Td>{summaryData.reduce((prev, cur) => prev + cur.member, 0)}</Td>
          <Td>{summaryData.reduce((prev, cur) => prev + cur.inquiry, 0)}</Td>
          <Td>{summaryData.reduce((prev, cur) => prev + cur.report, 0)}</Td>
        </Tr>
        <Tr id='monthTotal'>
          <Td id='date'>이번달 합계</Td>
          <Td>210</Td>
          <Td>214</Td>
          <Td>0</Td>
          <Td>0</Td>
        </Tr>
      </tbody>
    </Table>
  );
};

export default DailySummary;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Tr = styled.tr`
  text-align: center;
  background: #f2f3f4;
  &#weekTotal {
    background: ${COLORS.SUB};
  }
  &#monthTotal {
    color: #fff;
    background: ${COLORS.MAIN};
  }
`;

const Td = styled.td`
  padding: 7px;
  &#date {
    font-weight: 600;
  }
`;
