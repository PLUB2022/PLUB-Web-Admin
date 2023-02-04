import { ROUTES } from './routes';

export const menus = [
  {
    section: '관리자 계정 관리',
    path: ROUTES.MANAGE.ACCOUNT.ROOT,
    tabs: [],
  },
  {
    section: '대시보드',
    path: ROUTES.MANAGE.DASHBOARD.ROOT,
    tabs: [],
  },
  {
    section: '회원 관리',
    path: ROUTES.MANAGE.USER.ROOT,
    tabs: [
      {
        name: '회원 리스트',
        path: ROUTES.MANAGE.USER.LIST,
      },
      {
        name: '탈퇴 회원 리스트',
        path: ROUTES.MANAGE.USER.EXIT,
      },
      {
        name: '차단 회원 리스트',
        path: ROUTES.MANAGE.USER.BAN,
      },
    ],
  },
  {
    section: '모임 관리',
    path: ROUTES.MANAGE.GROUP.ROOT,
    tabs: [
      {
        name: '모임 리스트',
        path: ROUTES.MANAGE.GROUP.LIST,
      },
      {
        name: '모집 글 관리',
        path: ROUTES.MANAGE.GROUP.RECRUIT,
      },
      {
        name: '게시글 관리',
        path: ROUTES.MANAGE.GROUP.POST,
      },
    ],
  },
  {
    section: '마케팅 관리',
    path: ROUTES.MANAGE.MARKETING.ROOT,
    tabs: [
      {
        name: '배너 관리',
        path: ROUTES.MANAGE.MARKETING.BANNER,
      },
      {
        name: '이벤트 관리',
        path: ROUTES.MANAGE.MARKETING.EVENT,
      },
    ],
  },
  {
    section: '통계',
    path: ROUTES.MANAGE.STATISTICS.ROOT,
    tabs: [
      {
        name: '유저 통계',
        path: ROUTES.MANAGE.STATISTICS.USER,
      },
      {
        name: '모임 통계',
        path: ROUTES.MANAGE.STATISTICS.GROUP,
      },
    ],
  },
  {
    section: '고객센터',
    path: ROUTES.MANAGE.SERVICE.ROOT,
    tabs: [
      {
        name: '1:1 문의',
        path: ROUTES.MANAGE.SERVICE.INQUIRY,
      },
      {
        name: '공지사항',
        path: ROUTES.MANAGE.SERVICE.NOTICE,
      },
      {
        name: '고객 평가 관리',
        path: ROUTES.MANAGE.SERVICE.EVALUATION,
      },
    ],
  },
];
