'use client';

import React, { FC } from 'react';
import RegisterForm from '@/components/Forms/RegisterForm';
import Wrapper from '@/components/Wrapper/Wrapper';
import useCheckAuth from '@/hooks/useCheckAuth';

const page: FC = () => {
  return (
    <Wrapper className="register">
      <RegisterForm />
    </Wrapper>
  );
};

export default page;
