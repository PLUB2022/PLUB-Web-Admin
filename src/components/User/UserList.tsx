import styled from '@emotion/styled';

import Search from './UserList/Search';
import Table from './UserList/Table';

const UserList = () => {
  return (
    <Container>
      <Search />
      <Table />
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
