import { useSearchParams } from 'react-router-dom';

interface Params {
  page: number;
  size: number;
  keyword?: string;
  startedAt?: string;
  endedAt?: string;
}

const useGetParams = () => {
  const [searchParams] = useSearchParams();

  const params: Params = {
    page: Number(searchParams.get('page')) || 0,
    size: Number(searchParams.get('size')) || 10,
  };

  if (searchParams.get('search')) {
    params.keyword = searchParams.get('search') || '';
  }

  if (searchParams.get('startedAt')) {
    params.startedAt = searchParams.get('startedAt') || '';
  }

  if (searchParams.get('endedAt')) {
    params.endedAt = searchParams.get('endedAt') || '';
  }

  return params;
};

export default useGetParams;
