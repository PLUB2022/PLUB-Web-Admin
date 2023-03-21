import UserList from '../components/User/UserList';
import { nowCategory } from '../utils/nowPath';

interface UserTabs {
  [key: string]: JSX.Element;
}

const User = () => {
  const { tab } = nowCategory();

  const userTabs: UserTabs = {
    '회원 리스트': <UserList />,
    '탈퇴 회원 리스트': <div>탈퇴 회원 리스트</div>,
    '차단 회원 리스트': <div>차단 회원 리스트</div>,
  };

  return userTabs[tab];
};
export default User;
