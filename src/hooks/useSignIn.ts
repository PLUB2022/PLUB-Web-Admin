import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IUseSignIn {
  username: string;
  password: string;
}

const useSignIn = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<IUseSignIn>({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(values);
      navigate('/manage/dashboard');
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return { values, loading, handleChange, handleSubmit };
};

export default useSignIn;
