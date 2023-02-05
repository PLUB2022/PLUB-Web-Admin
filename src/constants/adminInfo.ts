import { AdminInfo } from './../interfaces/adminInfo';

export const canChange = ['비밀번호', '연락처'];

export const adminInfo = (info: AdminInfo) => {
  return [
    {
      key: '아이디',
      value: info.userId,
    },
    {
      key: '비밀번호',
      value: null,
    },
    {
      key: '이름',
      value: info.name,
    },
    {
      key: '연락처',
      value: info.phone,
    },
    {
      key: '관리자 등급',
      value: info.level,
    },
  ];
};
