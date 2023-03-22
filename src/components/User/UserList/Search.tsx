import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { COLORS } from '../../../constants/colors';
import { ROUTES } from '../../../constants/routes';
import useCalendar from '../../../hooks/useCalendar';
import { SearchBox, SearchTitle, SmallButton } from '../../../styles/Common';
import Button from '../../shared/Button';

const userTypes = [
  { id: 'normal', name: '일반 회원' },
  { id: 'ban', name: '차단 회원' },
  { id: 'promotion', name: '광고업체' },
];

const Search = () => {
  const navigate = useNavigate();
  const [startDate, StartCalendar] = useCalendar(new Date());
  const [endDate, EndCalendar] = useCalendar(new Date());
  const [searchValue, setSearchValue] = useState<string>('');
  const [userType, setUserType] = useState<string>('');

  const buttonId = (id: string) => {
    if (userType === id) return 'active';
    return '';
  };

  const handleUserType = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    if (userType === value) return setUserType('');
    setUserType(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    navigate(
      ROUTES.MANAGE.USER.LIST +
        '?search=' +
        searchValue +
        '&type=' +
        userType +
        '&start=' +
        startDate +
        '&end=' +
        endDate +
        '&page=1'
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchBox>
      <SearchHeader>
        <SearchTitle>회원검색</SearchTitle>
        <Button
          width='130px'
          fontSize='16px'
          borderRadius='10px'
          onClick={handleSearch}>
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
          <SearchInput
            placeholder='이름, 이메일, 아이디 등을 입력하세요'
            value={searchValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </SearchHeader>
    </SearchBox>
  );
};

export default Search;

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
