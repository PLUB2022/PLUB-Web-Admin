export interface DashboardStats {
  date: string;
  plubbings: number;
  accounts: number;
}

export interface StatsResponse {
  data: {
    data: DashboardStats[];
  };
}

export interface WeeklySummary {
  week: {
    date: string;
    plubbings: number;
    accounts: number;
    inquires: number;
    reports: number;
  }[];
  weeklyTotalAccounts: number;
  weeklyTotalPlubbings: number;
  weeklyTotalInquires: number;
  weeklyTotalReports: number;
  monthlyTotalAccounts: number;
  monthlyTotalPlubbings: number;
  monthlyTotalInquires: number;
  monthlyTotalReports: number;
}

export interface WeeklySummaryResponse {
  data: {
    data: WeeklySummary;
  };
}

export interface PlubbingRanking {
  plubbingId: number;
  title: string;
}

export interface PlubbingRankingResponse {
  data: {
    data: PlubbingRanking[];
  };
}
