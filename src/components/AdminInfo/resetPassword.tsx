import styled from '@emotion/styled';

import { COLORS } from '../../constants/colors';
import { Label, Modal, TextField } from '../../styles/Common';

interface ResetPasswordProps {
  modalOff: () => void;
}

const ResetPassword = ({ modalOff }: ResetPasswordProps) => {
  return (
    <Modal>
      <Title>비밀번호 변경</Title>
      <Label>새 비밀번호 입력</Label>
      <TextField id='gray' type='password' />
      <Label>새 비밀번호 확인</Label>
      <TextField id='gray' type='password' />
      <Button onClick={modalOff}>저장</Button>
      <Button id='cancel' onClick={modalOff}>
        닫기
      </Button>
    </Modal>
  );
};

export default ResetPassword;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 32px;
`;

export const Button = styled.button`
  color: ${COLORS.MAIN};
  background-color: ${COLORS.SUB};
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  float: right;
  margin-top: 10px;
  &#cancel {
    background: none;
    color: #000;
  }
`;
