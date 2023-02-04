import styled from '@emotion/styled';

import { COLORS } from '../constants/colors';

export const Container = styled.div`
  display: flex;
  &#notLogined {
    flex-direction: column;
    align-items: center;
    height: 100vh;
  }
`;

export const TabTitle = styled.div`
  font-size: 35px;
  font-weight: 700;
`;

export const TextField = styled.input`
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  padding: 12px 16px;
  margin: 8px 0;
  &:focus {
    outline: none;
    border: 1px solid ${COLORS.MAIN};
  }
`;
