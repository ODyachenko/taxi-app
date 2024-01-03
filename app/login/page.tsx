import LoginForm from '@/components/Forms/LoginForm';
import Wrapper from '@/components/Wrapper/Wrapper';
import React, { FC } from 'react';

const page: FC = () => {
  return (
    <Wrapper className="login">
      <LoginForm />
    </Wrapper>
  );
};

export default page;
