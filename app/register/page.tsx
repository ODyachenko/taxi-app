import React, { FC } from 'react';
import RegisterForm from '@/components/Forms/RegisterForm';
import Wrapper from '@/components/Wrapper/Wrapper';

const page: FC = () => {
  return (
    <Wrapper className="register">
      <RegisterForm />
    </Wrapper>
  );
};

export default page;
