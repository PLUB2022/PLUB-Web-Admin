export interface User {
  accountId: number;
  email: string;
  nickname: string;
  role: string;
  status: string;
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
