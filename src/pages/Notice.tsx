import { getNoticeDetail } from '../apis/Service';
import useGetNoticeList from '../hooks/useGetNoticeList';

const Notice = () => {
  const { noticeList } = useGetNoticeList();
  const handleClick = async (id: number) => {
    const data = await getNoticeDetail(id);
    console.log(data);
  };

  return (
    <div>
      {noticeList?.map(({ announcementId, title, content, createdAt }) => (
        <div key={announcementId} onClick={() => handleClick(announcementId)}>
          <h3>{title}</h3>
          <p>{content}</p>
          <p>{createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default Notice;
