import styled from '@emotion/styled';
import { Suspense } from 'react';

import Loading from '../shared/Loading';
import Search from './UserList/Search';
import Table from './UserList/Table';

const UserList = () => {
  return (
    <Container>
      <Search />
      <Suspense fallback={<Loading>로딩중</Loading>}>
        <Table />
      </Suspense>
    </Container>
  );
};

export default UserList;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
