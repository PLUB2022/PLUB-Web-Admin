import styled from '@emotion/styled';

import { adminInfo, canChange } from '../../constants/adminInfo';
import { COLORS } from '../../constants/colors';
import { AdminInfo } from '../../interfaces/adminInfo';

interface InfoTableProps {
  data: AdminInfo;
}

const InfoTable = ({ data }: InfoTableProps) => {
  const modify = (key: string) =>
    canChange.includes(key) && <Modify>변경</Modify>;

  return (
    <Table>
      <tbody>
        {adminInfo(data).map(({ key, value }) => (
          <tr key={key}>
            <Td>{key}</Td>
            <Td id='data'>
              {value}
              {modify(key)}
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default InfoTable;

const Table = styled.table`
  width: 500px;
`;

const Td = styled.td`
  padding: 16px 8px;
  font-size: 18px;
  &#data {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    font-weight: 700;
  }
`;

const Modify = styled.button`
  font-size: 18px;
  font-weight: 700;
  padding: 4px 8px;
  color: ${COLORS.MAIN};
  background: none;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${COLORS.SUB};
  }
`;
