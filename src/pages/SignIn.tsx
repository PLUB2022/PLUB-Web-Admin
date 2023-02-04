import styled from '@emotion/styled';

import { COLORS } from '../constants/colors';
import useSignIn from '../hooks/useSignin';
import { TabTitle, TextField } from '../styles/Common';

const SignIn = () => {
  const { values, handleChange, handleSubmit } = useSignIn();
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <TabTitle>로그인</TabTitle>
        <InputBox>
          <Label>아이디</Label>
          <TextField
            type='text'
            name='username'
            value={values.username}
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
        <Button>로그인</Button>
      </Form>
    </Container>
  );
};

export default SignIn;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 345px;
`;

const InputBox = styled.div`
  margin: 50px 0px 30px 0px;
`;

const Label = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  color: #fff;
  background: ${COLORS.MAIN};
  cursor: pointer;
`;
