import styled from '@emotion/styled';

import { COLORS } from '../constants/colors';

export const Container = styled.div`
  display: flex;
  &#notLogined {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`;

export const TabTitle = styled.div`
  font-size: 35px;
  font-weight: 700;
  padding: 0px 5px;
`;

export const TextField = styled.input`
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  padding: 12px 16px;
  margin: 8px 0;
  &#gray {
    background-color: #fbfbfb;
    margin-bottom: 20px;
  }
  &:focus {
    outline: none;
    border: 1px solid ${COLORS.MAIN};
  }
`;

export const Modal = styled.div`
  position: absolute;
  padding: 24px;
  top: 60px;
  left: 600px;
  border-radius: 20px;
  width: 420px;
  background-color: #fbfbfb;
`;

export const Label = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;
