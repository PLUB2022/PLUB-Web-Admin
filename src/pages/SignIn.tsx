import Form from '../components/SignIn/Form';
import useSignIn from '../hooks/useSignIn';

const SignIn = () => {
  const { values, error, loading, handleChange, handleSubmit } = useSignIn();

  return (
    <Form
      values={values}
      error={error}
      loading={loading}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignIn;
