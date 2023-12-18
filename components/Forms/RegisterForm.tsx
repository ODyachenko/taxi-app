import React, { FC } from 'react';
import Field from '@/UI/Field/Field';
import Btn from '@/UI/Btn/Btn';
import './styles.scss';

const RegisterForm: FC = () => {
  return (
    <form className="form">
      <h1 className="form__title">Sign Up</h1>
      <Field type="text" placeholder="Enter your name" />
      <Field type="number" placeholder="Enter your phone" />
      <Field type="email" placeholder="Enter your email" />
      <Field type="password" placeholder="Enter your password" />
      <Btn value="Sign Up" weigth="bold" />
    </form>
  );
};

export default RegisterForm;
