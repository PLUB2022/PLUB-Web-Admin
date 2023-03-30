import styled from '@emotion/styled';
import { useState } from 'react';

import { adminInfo, canChange } from '../../constants/adminInfo';
import { COLORS } from '../../constants/colors';
import { AdminInfo } from '../../interfaces/adminInfo';
import ResetPassword from './resetPassword';
import ResetPhone from './resetPhone';

const exData: AdminInfo = {
  userId: 'ADMIN1234',
  name: '관리자',
  level: '일반관리자',
  phone: '01012345678',
};

const InfoTable = () => {
  const [modal, setModal] = useState<string>('');
  const modalOff = () => setModal('');

  const modify = (key: string) => {
    const modalOn = () => setModal(key);
    const change = canChange.includes(key);
    return change && <Modify onClick={modalOn}>변경</Modify>;
  };
  return (
    <>
      <Table>
        <tbody>
          {adminInfo(exData).map(({ key, value }) => (
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
      {modal === '비밀번호' && <ResetPassword modalOff={modalOff} />}
      {modal === '연락처' && <ResetPhone modalOff={modalOff} />}
    </>
  );
};

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
