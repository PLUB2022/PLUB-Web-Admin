import { Modal } from '../../styles/Common';

interface ResetPhoneProps {
  modalOff: () => void;
}

const ResetPhone = ({ modalOff }: ResetPhoneProps) => {
  return (
    <Modal>
      <h1>연락처 변경</h1>
      <button onClick={modalOff}>닫기</button>
    </Modal>
  );
};

export default ResetPhone;
