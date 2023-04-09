import { useSearchParams } from 'react-router-dom';

const useGetParams = () => {
  const [searchParams] = useSearchParams();

  const params = {
    page: Number(searchParams.get('page')) || 0,
    size: Number(searchParams.get('size')) || 10,
  };

  return params;
};

export default useGetParams;
