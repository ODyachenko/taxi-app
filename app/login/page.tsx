import LoginForm from '@/components/Forms/LoginForm';
import React, { FC } from 'react';

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
