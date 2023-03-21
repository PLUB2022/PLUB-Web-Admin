import styled from '@emotion/styled';
import { useState } from 'react';

import { COLORS } from '../../constants/colors';
import useCalendar from '../../hooks/useCalendar';
import Button from '../shared/Button';

const userTypes = [
  { id: 'normal', name: '일반 회원' },
  { id: 'ban', name: '차단 회원' },
  { id: 'promotion', name: '광고업체' },
];

const UserList = () => {
  const [startDate, StartCalendar] = useCalendar(new Date());
  const [endDate, EndCalendar] = useCalendar(new Date());
  const [userType, setUserType] = useState<string>();
  const buttonId = (id: string) => {
    if (userType === id) return 'active';
    return '';
  };
  const handleUserType = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (userType === e.currentTarget.value) return setUserType('');
    setUserType(e.currentTarget.value);
  };
  console.log(startDate, endDate);

  return (
    <Container>
      <SearchBox>
        <SearchHeader>
          <SearchTitle>회원검색</SearchTitle>
          <Button width='130px' fontSize='16px' borderRadius='10px'>
            검색
          </Button>
        </SearchHeader>
        <SearchHeader id='sub'>
          <SearchTitle id='sub'>회원등급</SearchTitle>
          <div
            style={{
              display: 'flex',
              width: '260px',
              justifyContent: 'space-between',
            }}>
            {userTypes.map(({ id, name }) => (
              <SmallButton
                key={id}
                id={buttonId(id)}
                value={id}
                onClick={handleUserType}>
                {name}
              </SmallButton>
            ))}
          </div>
        </SearchHeader>
        <SearchHeader id='sub'>
          <SearchTitle id='sub'>가입일</SearchTitle>
          <div
            style={{
              display: 'flex',
              width: '300px',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <StartCalendar />
            -
            <EndCalendar />
          </div>
        </SearchHeader>
        <SearchHeader id='last'>
          <SearchTitle id='sub'>검색어</SearchTitle>
          <div style={{ display: 'flex', width: '300px' }}>
            <SearchInput placeholder='이름, 이메일, 아이디 등을 입력하세요' />
          </div>
        </SearchHeader>
      </SearchBox>
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

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: #fbfbfb;
  border-radius: 20px;
`;

const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  &#sub {
    width: 400px;
    justify-content: flex-start;
  }
  &#last {
    width: 400px;
    margin-bottom: 0px;
  }
`;

const SearchTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  width: 100px;
  &#sub {
    font-size: 16px;
  }
`;

const SmallButton = styled.button`
  font-size: 14px;
  padding: 7px 15px;
  border: 1px solid transparent;
  border-radius: 10px;
  background: transparent;
  color: #8c8c8c;
  cursor: pointer;
  &:hover {
    border: 1px solid #8c8c8c;
  }
  &#active {
    border: 1px solid transparent;
    color: ${COLORS.MAIN};
    background: ${COLORS.SUB};
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 7px 15px;
  border: 1px solid #8c8c8c;
  border-radius: 10px;
  font-size: 14px;
  background: transparent;
  &::placeholder {
    color: #8c8c8c;
    font-weight: 400;
  }
  &:focus {
    outline: none;
    border: 1px solid ${COLORS.MAIN};
  }
  &:hover {
    border: 1px solid ${COLORS.MAIN};
  }
`;
