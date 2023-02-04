import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  &#notLogined {
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
`;

export const TabTitle = styled.div`
  font-size: 36px;
`;
