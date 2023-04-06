import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';

import http from '../apis/instance';

interface PolicyResponse {
  title: string;
  content: string;
}

const Policies = () => {
  const { pathname } = useLocation();
  const { data: policy } = useQuery([pathname], async () => {
    const data: PolicyResponse = await http.get(pathname);
    return data;
  });

  return (
    <div style={{ width: '700px', margin: '0 auto', textAlign: 'center' }}>
      <h1>{policy?.title}</h1>
      <p>{policy?.content}</p>
    </div>
  );
};

export default Policies;
