import { Notice } from '../../../interfaces/service';

interface NoticeItemProps {
  notice: Notice;
}

const NoticeItem = ({ notice }: NoticeItemProps) => {
  const { title, content, createdAt } = notice;
  return (
    <div>
      <div>{title}</div>
      <div>{content}</div>
      <div>{createdAt}</div>
    </div>
  );
};

export default NoticeItem;
