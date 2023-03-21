import styled from '@emotion/styled';

import Search from './UserList/Search';

const UserList = () => {
  return (
    <Container>
      <Search />
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
