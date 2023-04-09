export interface User {
  accountId: number;
  email: string;
  nickname: string;
  role: 'ROLE_USER' | 'ROLE_ADMIN';
  status: 'NORMAL' | 'BAN';
  joinDate: string;
}

export interface UserListResponse {
  data: {
    accountList: {
      totalElements: number;
      last: boolean;
      content: User[];
    };
  };
}
