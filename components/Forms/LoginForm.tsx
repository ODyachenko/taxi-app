'use client';

import React, { useEffect } from 'react';
import Link from '@/node_modules/next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import Btn from '@/UI/Btn/Btn';
import Field from '@/UI/Field/Field';
import './styles.scss';
import { supabase } from '@/supabase/settings';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setCurrentUser, setIsAuth } from '@/redux/slices/userSlice';
import { redirect } from '@/node_modules/next/navigation';
import useCheckAuth from '@/hooks/useCheckAuth';

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
  const { isAuth } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useCheckAuth();
  useEffect(() => {
    isAuth && redirect('/');
  }, [isAuth]);

  const onSubmit: SubmitHandler<Inputs> = async (formData: Inputs) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword(formData);

      if (error) {
        throw error;
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
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
            minLength: { value: 5, message: 'Min length is 5' },
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
