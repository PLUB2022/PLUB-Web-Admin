import { useEffect, useState } from 'react';

import { getPlubbingRanking } from '../apis/Dashboard';
import { PlubbingRanking } from './../interfaces/dashboard';

const useGetPlubbingRank = () => {
  const [plubbingRank, setPlubbingRank] = useState<PlubbingRanking[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getPlubbingRank = async () => {
      const ranking = await getPlubbingRanking();
      setPlubbingRank(ranking);
      setIsLoading(false);
    };
    getPlubbingRank();
  }, []);

  return { plubbingRank, isLoading };
};

export default useGetPlubbingRank;
