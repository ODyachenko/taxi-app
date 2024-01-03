import React, { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Field from '@/UI/Field/Field';
import Btn from '@/UI/Btn/Btn';
import Image from '@/node_modules/next/image';
import { supabase } from '@/supabase/settings';
import { v4 } from 'uuid';
import './styles.scss';
import { redirect, useRouter } from '@/node_modules/next/navigation';
import { RegisterFormData } from '@/types';
import { useAppDispatch } from '@/hooks/hooks';
import { registerUser } from '@/redux/slices/userSlice';

const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>({ mode: 'onChange' });

  const [avatar, setAvatar] = useState(
    `${process.env.NEXT_PUBLIC_AVATARS_STORAGE}/avatar_private.png?t=2023-12-18T13%3A24%3A17.910Z`
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterFormData> = (
    formData: RegisterFormData
  ) => {
    const data = {
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          fullName: formData.fullName,
          avatarUrl: avatar,
        },
      },
    };
    dispatch(registerUser({ data, router }));
  };

  const handleChangeFile = async (event: any) => {
    try {
      const avatarFile = event.target.files[0];
      const { data, error } = await supabase.storage
        .from('avatars')
        .upload(`${v4()}`, avatarFile, {
          cacheControl: '3600',
          upsert: false,
        });
      if (error) {
        throw error;
      }
      setAvatar(`${process.env.NEXT_PUBLIC_AVATARS_STORAGE}/${data.path}`);
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
            minLength: { value: 6, message: 'Min length is 6' },
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
