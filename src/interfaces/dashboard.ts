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
  date: string;
  plubbings: number;
  accounts: number;
  inquires: number;
  reports: number;
}

export interface WeeklySummaryResponse {
  data: {
    data: WeeklySummary[];
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
