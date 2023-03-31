import { useQuery } from 'react-query';

import { getNoticeList } from '../../apis/Service';
import { QUERYKEY } from '../../constants/queryKey';
import NoticeItem from './Notice/NoticeItem';

const Notice = () => {
  const { data: noticeList } = useQuery(QUERYKEY.NOTICE, getNoticeList);

  return (
    <div>
      {noticeList?.map((notice) => (
        <NoticeItem key={notice.announcementId} notice={notice} />
      ))}
    </div>
  );
};

export default Notice;
