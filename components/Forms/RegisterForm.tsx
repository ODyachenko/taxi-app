'use client';

import React, { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Field from '@/UI/Field/Field';
import Btn from '@/UI/Btn/Btn';
import './styles.scss';
import Image from '@/node_modules/next/image';
import useCheckAuth from '@/hooks/useCheckAuth';
import { useAppSelector } from '@/hooks/hooks';
import { redirect } from '@/node_modules/next/navigation';
import { supabase } from '@/supabase/settings';

type Inputs = {
  avatarUrl?: string;
  fullName: string;
  email: string;
  password: string;
};

const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onChange' });

  // const [uploadImage] = useUploadImageMutation();
  const [avatar, setAvatar] = useState(
    `${process.env.NEXT_PUBLIC_supabaseUrl}/storage/v1/object/public/avatars/avatar_private.png?t=2023-12-18T13%3A24%3A17.910Z`
  );
  const { isAuth } = useAppSelector((state) => state.user);

  useCheckAuth();
  useEffect(() => {
    isAuth && redirect('/');
  }, [isAuth]);

  const onSubmit: SubmitHandler<Inputs> = async (formData: Inputs) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            fullName: formData.fullName,
            avatarUrl: formData.avatarUrl,
          },
        },
      });
      if (error) {
        throw error;
      }
      redirect('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeFile = async (event: any) => {
    try {
      const formData = new FormData();
      formData.append('image', event.target.files[0]);
      // const { data }: any = await uploadImage(formData);
      // setAvatar(`${process.env.NEXT_PUBLIC_API_URL}${data.url}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form__title">Sign Up</h1>
      <label className="form__avatar">
        <Image
          className="form__avatar--img"
          src={avatar}
          alt="User avatar"
          height={100}
          width={100}
          priority
        />
        <input type="file" accept="image/*" onChange={handleChangeFile} />
      </label>
      <Field
        className={`form__field field ${!!errors.fullName ? 'error' : ''}`}
        type="text"
        placeholder="Full name"
        register={{
          ...register('fullName', {
            required: 'This field is required',
            minLength: { value: 2, message: 'Min length is 2' },
            maxLength: { value: 30, message: 'Max length is 30' },
          }),
        }}
      />
      {errors.fullName && (
        <span className="field__error">{errors.fullName.message}</span>
      )}
      <Field
        className={`form__field field ${!!errors.email ? 'error' : ''}`}
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
        className={`form__field field ${!!errors.password ? 'error' : ''}`}
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
      <Btn value="Sign Up" weigth="bold" />
    </form>
  );
};

export default RegisterForm;
