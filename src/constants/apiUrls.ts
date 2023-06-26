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
    STATUS: (id: number, status: string) =>
      `/accounts/${id}/update-status?status=${status}`,
    UNSUSPENDING: (id: number) => `/accounts/${id}/unsuspend`,
  },
  SERVICE: {
    NOTICE: {
      ITEM: '/announcements',
      DETAIL: (id: number) => `/announcements/${id}`,
    },
  },
  POLICY: {
    TEMRS: '/policies/terms',
    PERSONAL: '/policies/personal',
    LOCATION: '/policies/location',
    AGE: '/policies/age',
    MARKETING: '/policies/marketing',
  },
};
