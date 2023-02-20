import { useEffect, useState } from 'react';

import { WeeklySummary } from '../interfaces/dashboard';
import { getWeeklySummary } from './../apis/Dashboard';

const useGetWeeklySummary = () => {
  const [weeklySummary, setWeeklySummary] = useState<WeeklySummary[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchWeeklySummary = async () => {
      setIsLoading(true);
      const weeklySummary = await getWeeklySummary();
      setWeeklySummary(weeklySummary);
      setIsLoading(false);
    };
    fetchWeeklySummary();
  }, []);

  return { weeklySummary, isLoading };
};

export default useGetWeeklySummary;
