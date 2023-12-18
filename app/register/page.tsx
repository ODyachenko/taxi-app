import React, { FC } from 'react';
import RegisterForm from '@/components/Forms/RegisterForm';

const page: FC = () => {
  return (
    <section className="register block">
      <div className="container">
        <RegisterForm />
      </div>
    </section>
  );
};

export default page;
