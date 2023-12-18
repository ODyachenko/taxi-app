import Logo from '@/UI/Logo';
import React, { FC } from 'react';
import './styles.scss';

const page: FC = () => {
  return (
    <div className="splash">
      <Logo color="#fff" />
    </div>
  );
};

export default page;
