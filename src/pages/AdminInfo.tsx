import { useState } from 'react';

import InfoTable from '../components/AdminInfo/InfoTable';
import ResetPassword from '../components/AdminInfo/resetPassword';
import ResetPhone from '../components/AdminInfo/resetPhone';

interface Modal {
  [key: string]: JSX.Element;
}

const AdminInfo = () => {
  const [modalType, setModalType] = useState<string>('');

  const handleModalOn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setModalType(target.id);
  };
  const handleModalOff = () => setModalType('');

  const modal: Modal = {
    password: <ResetPassword modalOff={handleModalOff} />,
    phone: <ResetPhone modalOff={handleModalOff} />,
  };

  return (
    <>
      <InfoTable modalOn={handleModalOn} />
      {modalType && modal[modalType]}
    </>
  );
};

export default AdminInfo;
