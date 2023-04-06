import styled from '@emotion/styled';

import { COLORS } from '../../constants/colors';

interface InfoTableProps {
  modalOn: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const InfoTable = ({ modalOn }: InfoTableProps) => (
  <Table>
    <tbody>
      <tr>
        <Td>아이디</Td>
        <Td id='data'>ADMIN12345</Td>
      </tr>
      <tr>
        <Td>비밀번호</Td>
        <Td id='data'>
          <Modify id='password' onClick={modalOn}>
            변경
          </Modify>
        </Td>
      </tr>
      <tr>
        <Td>이름</Td>
        <Td id='data'>관리자 </Td>
      </tr>
      <tr>
        <Td>연락처</Td>
        <Td id='data'>
          01012345678
          <Modify id='phone' onClick={modalOn}>
            변경
          </Modify>
        </Td>
      </tr>
      <tr>
        <Td>관리자등급</Td>
        <Td id='data'>일반관리자 </Td>
      </tr>
    </tbody>
  </Table>
);

export default InfoTable;

const Table = styled.table`
  width: 500px;
`;

const Td = styled.td`
  padding: 16px 8px;
  font-size: 1.8rem;
  &#data {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 2rem;
    font-weight: 700;
  }
`;

const Modify = styled.button`
  font-size: 1.8rem;
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
