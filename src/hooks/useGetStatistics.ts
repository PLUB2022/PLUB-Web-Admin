import { useEffect, useState } from 'react';

import { getDashboardStats } from '../apis/Dashboard';
import { DashboardStats } from '../interfaces/dashboard';

const useGetStatistics = () => {
  const [statistics, setStatistics] = useState<DashboardStats[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchStatistics = async () => {
      setIsLoading(true);
      const statistics = await getDashboardStats();
      setStatistics(statistics);
      setIsLoading(false);
    };
    fetchStatistics();
  }, []);

  return { statistics, isLoading };
};

export default useGetStatistics;
