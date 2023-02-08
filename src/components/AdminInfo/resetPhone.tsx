import { Label, Modal, TextField } from '../../styles/Common';
import { Button, Title } from './resetPassword';

interface ResetPhoneProps {
  modalOff: () => void;
}

const ResetPhone = ({ modalOff }: ResetPhoneProps) => {
  return (
    <Modal>
      <Title>연락처 변경</Title>
      <Label>새 연락처 입력</Label>
      <TextField id='gray' />
      <Button onClick={modalOff}>저장</Button>
      <Button id='cancel' onClick={modalOff}>
        닫기
      </Button>
    </Modal>
  );
};

export default ResetPhone;
