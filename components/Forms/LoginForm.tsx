import Link from '@/node_modules/next/link';
import Btn from '@/UI/Btn/Btn';
import Field from '@/UI/Field/Field';
import React from 'react';
import './styles.scss';

const LoginForm = () => {
  return (
    <form className="form">
      <h1 className="form__title">Sign In</h1>
      <Field type="email" placeholder="Enter your email" />
      <Field type="password" placeholder="Enter your password" />
      <Btn value="Sign In" weigth="bold" />
      <Link href="/register">Don't have an account?</Link>
    </form>
  );
};

export default LoginForm;
