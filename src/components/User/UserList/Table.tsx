import styled from '@emotion/styled';

import { COLORS } from '../../../constants/colors';
import { SearchBox, SearchTitle, SmallButton } from '../../../styles/Common';

interface ExData {
  id: number;
  email: string;
  nickname: string;
  type: 'normal' | 'ban' | 'promotion';
  status: 'active' | 'ban';
  createdAt: string;
}

const exData: ExData[] = [
  {
    id: 1,
    email: 'example@example.com',
    nickname: '홍길동',
    type: 'normal',
    status: 'active',
    createdAt: '2023-01-01',
  },
  {
    id: 2,
    email: 'example@example.com',
    nickname: '이진욱',
    type: 'normal',
    status: 'active',
    createdAt: '2023-01-01',
  },
  {
    id: 3,
    email: 'example@example.com',
    nickname: '홍길동',
    type: 'normal',
    status: 'ban',
    createdAt: '2023-01-01',
  },
  {
    id: 4,
    email: 'example@example.com',
    nickname: '홍길동',
    type: 'normal',
    status: 'active',
    createdAt: '2023-01-01',
  },
  {
    id: 5,
    email: 'example@example.com',
    nickname: '홍길동',
    type: 'normal',
    status: 'ban',
    createdAt: '2023-01-01',
  },
];

const Table = () => {
  const status = {
    active: '정상',
    ban: '차단',
  };
  const type = {
    normal: '일반 회원',
    ban: '차단 회원',
    promotion: '광고업체',
  };

  return (
    <SearchBox>
      <SearchTitle>
        검색 결과&nbsp; <span style={{ color: COLORS.MAIN }}>5</span>
        <span style={{ color: '#c4c4c4' }}> / 총 5명 검색 결과</span>
      </SearchTitle>
      <Controller>
        <CustomRadio>
          <Radio type='checkbox' name='checkAll' id='all' />
          <Label htmlFor='all'>전체</Label>
        </CustomRadio>
        <Buttons>
          <SmallButton id='item'>메일 발송</SmallButton>
          <SmallButton id='item'>등급 변경</SmallButton>
          <SmallButton id='item'>상태 변경</SmallButton>
          <SmallButton id='item'>쪽지 발송</SmallButton>
          <SmallButton id='item'>탈퇴 처리</SmallButton>
          <SmallButton id='item'>엑셀로 저장</SmallButton>
        </Buttons>
      </Controller>
      <CustomTable>
        <thead>
          <tr>
            <th>선택</th>
            <th>번호</th>
            <th>아이디</th>
            <th>닉네임</th>
            <th>등급</th>
            <th>상태</th>
            <th>가입일</th>
          </tr>
        </thead>
        <tbody>
          {exData.map((data) => (
            <tr key={data.id}>
              <td>
                <Radio type='checkbox' name='check' id='item' value={data.id} />
              </td>
              <td>{data.id}</td>
              <td id='email'>{data.email}</td>
              <td>{data.nickname}</td>
              <td>{type[data.type]}</td>
              <td id={data.status}>{status[data.status]}</td>
              <td>{data.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </CustomTable>
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
  border: 1px solid #8c8c8c;
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
  color: #8c8c8c;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const CustomTable = styled.table`
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
  overflow: hidden;
  & th {
    border-top: 2px solid ${COLORS.MAIN};
    padding: 15px 0 10px 0;
    text-align: center;
    color: ${COLORS.MAIN};
    font-weight: 600;
  }
  & td {
    border-bottom: 1px solid #f2f3f4;
    padding: 15px 0;
    text-align: center;
    color: #8c8c8c;
    &#ban {
      color: ${COLORS.ERROR};
    }
    &#email {
      width: 30%;
    }
  }
`;
