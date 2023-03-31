import { Suspense } from 'react';

import Notice from '../components/Service/Notice';
import Loading from '../components/shared/Loading';
import { nowCategory } from '../utils/nowPath';

interface ServiceTabs {
  [key: string]: JSX.Element;
}

const Service = () => {
  const { tab } = nowCategory();
  const serviceTabs: ServiceTabs = {
    '1:1 문의': <div>1:1 문의</div>,
    공지사항: <Notice />,
    '고객 평가 관리': <div>고객 평가 관리</div>,
  };

  return (
    <Suspense fallback={<Loading>로딩중</Loading>}>{serviceTabs[tab]}</Suspense>
  );
};

export default Service;
