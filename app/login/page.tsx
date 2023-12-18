import LoginForm from '@/components/LoginForm/LoginForm';
import React, { FC } from 'react';
import './styles.scss';

const page: FC = () => {
  return (
    <section className="login block">
      <div className="container">
        <LoginForm />
      </div>
    </section>
  );
};

export default page;
