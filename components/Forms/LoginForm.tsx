'use client';

import Link from '@/node_modules/next/link';
import { redirect } from '@/node_modules/next/navigation';
import { useForm, SubmitHandler } from 'react-hook-form';
import { loginUser } from '@/redux/slices/userSlice';
import { useAppDispatch } from '@/hooks/hooks';
import Field from '@/UI/Field/Field';
import Btn from '@/UI/Btn/Btn';
import './styles.scss';

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onChange' });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    dispatch(loginUser({ data, redirect }));
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title">Sign In</h1>
      <Field
        className={`form__field ${!!errors.email ? 'error' : ''}`}
        type="email"
        placeholder="E-mail"
        register={{
          ...register('email', {
            required: 'This field is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Please enter valid email',
            },
          }),
        }}
      />
      {errors.email && (
        <span className="field__error">{errors.email.message}</span>
      )}
      <Field
        className={`form__field ${!!errors.password ? 'error' : ''}`}
        type="password"
        placeholder="Password"
        register={{
          ...register('password', {
            required: 'This field is required',
            minLength: { value: 6, message: 'Min length is 6' },
          }),
        }}
      />
      {errors.password && (
        <span className="field__error">{errors.password.message}</span>
      )}
      <Btn value="Sign In" weigth="bold" />
      <Link className="form__link" href="/register">
        Don't have an account?
      </Link>
    </form>
  );
};

export default LoginForm;
