export const API_URLS = {
  AUTH: {
    LOGIN: '/auth/login/admin',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/reissue',
  },
  DASHBOARD: {
    STATS: '/admin/accounts-plubbings',
    WEEKLY_SUMMARY: '/admin/weekly-summary',
    PLUBBING_RANKING: '/admin/plubbing-ranking',
  },
  USER: {
    LIST: '/accounts',
    SEARCH: '/accounts/search',
  },
  SERVICE: {
    NOTICE: {
      ITEM: '/announcements',
      DETAIL: (id: number) => `/announcements/${id}`,
    },
  },
};
