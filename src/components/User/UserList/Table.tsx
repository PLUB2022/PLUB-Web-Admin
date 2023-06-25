import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { userList, userSearch } from '../../../apis/User';
import { COLORS } from '../../../constants/colors';
import useGetParams from '../../../hooks/useGetParams';
import { SearchBox, SearchTitle, SmallButton } from '../../../styles/Common';
import Pagination from '../../shared/Pagination';

const Table = () => {
  const params = useGetParams();
  const { data: users } = useQuery(
    ['userList', params],
    () => (!params.keyword ? userList(params) : userSearch(params)),
    {
      keepPreviousData: true,
    }
  );

  const [checkList, setCheckList] = useState<number[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target as HTMLInputElement;
    if (checked) {
      setCheckList([...checkList, Number(value)]);
    } else {
      setCheckList(checkList.filter((id) => id !== Number(value)));
    }
  };

  const allCheck = (e: React.MouseEvent<HTMLInputElement>) => {
    const { checked } = e.target as HTMLInputElement;
    if (users) {
      if (checked) {
        setCheckList(users?.content.map(({ accountId }) => accountId));
      } else {
        setCheckList([]);
      }
    }
  };

  const isChecked = (id: number) => checkList.includes(id);

  const userStatus = {
    NORMAL: '정상',
    BAN: '차단',
  };

  useEffect(() => {
    const all = document.getElementById('all') as HTMLInputElement;

    if (checkList.length === users?.content.length) {
      all.checked = true;
    } else {
      all.checked = false;
    }
  }, [checkList]);

  return (
    <SearchBox id='table'>
      <SearchTitle>
        검색 결과&nbsp;{' '}
        <span style={{ color: COLORS.MAIN }}>{users?.content.length}</span>
        <span style={{ color: COLORS.MEDIUM_GRAY }}>
          {' '}
          / 총 {users?.totalElements}명 검색 결과
        </span>
      </SearchTitle>
      <Controller>
        <CustomRadio>
          <Radio type='checkbox' name='checkAll' id='all' onClick={allCheck} />
          <Label htmlFor='all'>전체</Label>
        </CustomRadio>
        <Buttons>
          <SmallButton id='item'>상태 변경</SmallButton>
          <SmallButton id='item'>영구정지 해제</SmallButton>
        </Buttons>
      </Controller>
      <CustomTable>
        <thead>
          <tr>
            <th>선택</th>
            <th>번호</th>
            <th>아이디</th>
            <th>닉네임</th>
            <th>상태</th>
            <th>가입일</th>
          </tr>
        </thead>
        <tbody>
          {users?.content.map(
            ({ accountId, email, nickname, status, joinDate }) => (
              <tr key={accountId} id={String(isChecked(accountId))}>
                <td>
                  <Radio
                    type='checkbox'
                    name='check'
                    id='item'
                    value={accountId}
                    checked={isChecked(accountId)}
                    onChange={handleChange}
                  />
                </td>
                <td>{accountId}</td>
                <td id='email'>{email}</td>
                <td>{nickname}</td>
                <td id={status}>{userStatus[status]}</td>
                <td id='date'>{joinDate}</td>
              </tr>
            )
          )}
        </tbody>
      </CustomTable>
      <Pagination count={users?.totalElements || 0} />
    </SearchBox>
  );
};

export default Table;

const Controller = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 97%;
  margin: 15px auto;
`;

const CustomRadio = styled.div`
  display: flex;
  align-items: center;
`;

const Radio = styled.input`
  appearance: none;
  border: 1px solid ${COLORS.DEEP_GRAY};
  width: 18px;
  height: 18px;
  border-radius: 5px;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
  &#item {
    margin-right: 0;
  }
  &::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 29%;
    display: none;
  }
  &:checked {
    background: ${COLORS.MAIN};
    border: 1px solid ${COLORS.MAIN};
    &::after {
      display: block;
      border: 2px solid #fff;
      border-top: 0;
      border-right: 0;
      transform: rotate(-45deg);
      transform-origin: 100% 10%;
    }
  }
  &:hover {
    box-shadow: 0 0 5px ${COLORS.MAIN};
  }
`;

const Label = styled.label`
  cursor: pointer;
  color: ${COLORS.DEEP_GRAY};
  font-size: 1.6rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const CustomTable = styled.table`
  width: 100%;
  font-size: 1.6rem;
  margin: 0 auto;
  border-collapse: collapse;
  overflow: hidden;
  & tr {
    &#true {
      background: ${COLORS.SUB};
    }
  }
  & th {
    border-top: 2px solid ${COLORS.MAIN};
    padding: 15px 0 10px 0;
    text-align: center;
    color: ${COLORS.MAIN};
    font-weight: 600;
  }
  & td {
    border-bottom: 1px solid ${COLORS.LIGHT_GRAY};
    padding: 15px 0;
    text-align: center;
    color: ${COLORS.DEEP_GRAY};
    &#ban {
      color: ${COLORS.ERROR};
    }
    &#email {
      width: 25%;
    }
    &#date {
      width: 20%;
    }
  }
`;
