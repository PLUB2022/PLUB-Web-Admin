import { useEffect, useState } from 'react';

import { Notice } from '../interfaces/service';
import { getNoticeList } from './../apis/Service';

const useGetNoticeList = () => {
  const [noticeList, setNoticeList] = useState<Notice[]>();

  const fetchNoticeList = async () => {
    const data = await getNoticeList();
    setNoticeList(data);
  };

  useEffect(() => {
    fetchNoticeList();
  }, []);

  return { noticeList };
};

export default useGetNoticeList;
