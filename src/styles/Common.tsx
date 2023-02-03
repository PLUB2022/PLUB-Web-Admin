import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  &#notLogined {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`;
