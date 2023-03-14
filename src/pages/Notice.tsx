import useGetNoticeList from '../hooks/useGetNoticeList';

const Notice = () => {
  const { noticeList } = useGetNoticeList();
  return (
    <div>
      {noticeList?.map(({ announcementId, title, content, createdAt }) => (
        <div key={announcementId}>
          <h3>{title}</h3>
          <p>{content}</p>
          <p>{createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default Notice;
