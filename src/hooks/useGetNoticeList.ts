import { useQuery } from 'react-query';

import { getNoticeList } from './../apis/Service';
import { QUERYKEY } from './../constants/queryKey';

const useGetNoticeList = () => {
  const { data: noticeList } = useQuery(QUERYKEY.NOTICE, getNoticeList);

  return { noticeList };
};

export default useGetNoticeList;
