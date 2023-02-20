import styled from '@emotion/styled';

import { COLORS } from '../../constants/colors';
import useGetWeeklySummary from '../../hooks/useGetWeeklySummary';

const DailySummary = () => {
  const { weeklySummary, isLoading } = useGetWeeklySummary();
  if (isLoading || !weeklySummary) return <div>로딩중</div>;
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
        {weeklySummary.map(
          ({ plubbings, accounts, inquires, reports, date }) => (
            <Tr key={date}>
              <Td id='date'>{date}</Td>
              <Td>{plubbings}</Td>
              <Td>{accounts}</Td>
              <Td>{inquires}</Td>
              <Td>{reports}</Td>
            </Tr>
          )
        )}
        <Tr id='weekTotal'>
          <Td id='date'>최근 7일 합계</Td>
          <Td>
            {weeklySummary.reduce((prev, { plubbings }) => prev + plubbings, 0)}
          </Td>
          <Td>
            {weeklySummary.reduce((prev, { accounts }) => prev + accounts, 0)}
          </Td>
          <Td>
            {weeklySummary.reduce((prev, { inquires }) => prev + inquires, 0)}
          </Td>
          <Td>
            {weeklySummary.reduce((prev, { reports }) => prev + reports, 0)}
          </Td>
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
  padding: 4px;
  &#date {
    font-weight: 600;
  }
`;
