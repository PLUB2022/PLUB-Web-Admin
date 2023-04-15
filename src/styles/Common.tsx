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
  font-size: 3.5rem;
  font-weight: 700;
  &#sub {
    display: inline-block;
    font-size: 2rem;
    font-weight: 400;
    color: ${COLORS.MEDIUM_GRAY};
  }
`;

export const TextField = styled.input`
  width: 100%;
  border: 1px solid ${COLORS.MEDIUM_GRAY};
  border-radius: 10px;
  font-size: 1.6rem;
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
  font-size: 1.6rem;
  margin-top: 10px;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #fbfbfb;
  border-radius: 20px;
  &#table {
    margin-bottom: 20px;
  }
`;

export const SmallButton = styled.button`
  font-size: 1.4rem;
  padding: 7px 15px;
  border: 1px solid transparent;
  border-radius: 10px;
  background: transparent;
  color: ${COLORS.DEEP_GRAY};
  cursor: pointer;
  &:hover {
    border: 1px solid ${COLORS.DEEP_GRAY};
  }
  &#active {
    border: 1px solid transparent;
    color: ${COLORS.MAIN};
    background: ${COLORS.SUB};
  }
  &#item {
    border: 1px solid ${COLORS.DEEP_GRAY};
    &:hover {
      border: 1px solid transparent;
      color: ${COLORS.MAIN};
      background: ${COLORS.SUB};
    }
    &:focus {
      border: 1px solid transparent;
      color: ${COLORS.SUB};
      background: ${COLORS.MAIN};
    }
  }
`;

export const SearchTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  &#sub {
    font-size: 1.6rem;
    width: 100px;
  }
`;
