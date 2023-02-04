export const ROUTES = {
  SIGNIN: '/',
  MANAGE: {
    ACCOUNT: { ROOT: '/manage/account' },
    DASHBOARD: { ROOT: '/manage/dashboard' },
    USER: {
      ROOT: '/manage/user',
      LIST: '/manage/user/list',
      EXIT: '/manage/user/exit',
      BAN: '/manage/user/ban',
    },
    GROUP: {
      ROOT: '/manage/group',
      LIST: '/manage/group/list',
      RECRUIT: '/manage/group/recruit',
      POST: '/manage/group/post',
    },
    MARKETING: {
      ROOT: '/manage/marketing',
      BANNER: '/manage/marketing/banner',
      EVENT: '/manage/marketing/event',
    },
    STATISTICS: {
      ROOT: '/manage/statistics',
      USER: '/manage/statistics/user',
      GROUP: '/manage/statistics/group',
    },
    SERVICE: {
      ROOT: '/manage/service',
      INQUIRY: '/manage/service/inquiry',
      NOTICE: '/manage/service/notice',
      EVALUATION: '/manage/service/evaluation',
    },
  },
  NOT_FOUND: '/not-found',
};
