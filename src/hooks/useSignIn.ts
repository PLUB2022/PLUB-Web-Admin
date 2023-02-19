import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from '../apis/Auth';
import { ERROR_MESSAGES } from '../constants/errorMessages';
import { ROUTES } from '../constants/routes';
import { LoginError, UseSignIn } from '../interfaces/login';

const useSignIn = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<UseSignIn>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const { isSignInFailed, errorCode }: LoginError = await login(values);
    if (isSignInFailed) {
      setError(ERROR_MESSAGES.AUTH[errorCode]);
      setLoading(false);
      return;
    }
    navigate(ROUTES.MANAGE.DASHBOARD.ROOT, { replace: true });
    setLoading(false);
  };

  return { values, error, loading, handleChange, handleSubmit };
};

export default useSignIn;
