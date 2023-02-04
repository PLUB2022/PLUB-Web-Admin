import { useState } from 'react';

interface IUseSignin {
  username: string;
  password: string;
}

const useSignIn = () => {
  const [values, setValues] = useState<IUseSignin>({
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
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return { values, loading, handleChange, handleSubmit };
};

export default useSignIn;
