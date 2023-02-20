import {
  PlubbingRankingResponse,
  StatsResponse,
  WeeklySummaryResponse,
} from '../interfaces/dashboard';
import { API_URLS } from './../constants/apiUrls';
import http from './instance';

export const getDashboardStats = async () => {
  try {
    const {
      data: { data: statistics },
    }: StatsResponse = await http.get({
      url: API_URLS.DASHBOARD.STATS,
    });
    return statistics;
  } catch (error) {
    console.error(error);
  }
};

export const getWeeklySummary = async () => {
  try {
    const {
      data: { data: summary },
    }: WeeklySummaryResponse = await http.get({
      url: API_URLS.DASHBOARD.WEEKLY_SUMMARY,
    });
    return summary;
  } catch (error) {
    console.error(error);
  }
};

export const getPlubbingRanking = async () => {
  try {
    const {
      data: { data: ranking },
    }: PlubbingRankingResponse = await http.get({
      url: API_URLS.DASHBOARD.PLUBBING_RANKING,
    });
    return ranking;
  } catch (error) {
    console.error(error);
  }
};
