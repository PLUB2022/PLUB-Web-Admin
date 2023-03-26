import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { userList } from './../apis/User';
import { User } from './../interfaces/user';

const useGetUserList = () => {
  const [searchParams] = useSearchParams();
  const [user, setUser] = useState<User[]>();
  const [totalElements, setTotalElements] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const params = {
    page: Number(searchParams.get('page')) || 0,
    size: Number(searchParams.get('size')) || 10,
    sort: searchParams.get('sort') || 'accountId,desc',
  };

  useEffect(() => {
    const getUserList = async () => {
      const data = await userList(params);
      setUser(data?.content);
      setTotalElements(data?.totalElements);
    };
    setIsLoading(true);
    getUserList();
    setIsLoading(false);
  }, []);

  return { user, totalElements, isLoading };
};

export default useGetUserList;
