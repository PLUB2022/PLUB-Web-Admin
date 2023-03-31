import styled from '@emotion/styled';

import { COLORS } from '../constants/colors';
import useSignIn from '../hooks/useSignIn';
import { TabTitle, TextField } from '../styles/Common';

const SignIn = () => {
  const { values, error, loading, handleChange, handleSubmit } = useSignIn();
  return (
    <Form onSubmit={handleSubmit}>
      <TabTitle>로그인</TabTitle>
      <InputBox>
        <Label>아이디</Label>
        <TextField
          type='text'
          name='email'
          value={values.email}
          onChange={handleChange}
        />
        <Label>비밀번호</Label>
        <TextField
          type='password'
          name='password'
          value={values.password}
          onChange={handleChange}
        />
      </InputBox>
      <Button disabled={loading}>로그인</Button>
      <Error>{error}</Error>
    </Form>
  );
};

export default SignIn;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 345px;
  height: 350px;
`;

const InputBox = styled.div`
  margin: 50px 0px 30px 0px;
`;

const Label = styled.div`
  font-size: 1.6rem;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  background: ${COLORS.MAIN};
  cursor: pointer;
`;

const Error = styled.div`
  color: ${COLORS.ERROR};
  text-align: center;
  margin-top: 20px;
`;
