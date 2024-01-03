import React, { FC } from 'react';
import { Wrapper } from '@/types';

const Wrapper: FC<Wrapper> = ({ className, children }) => {
  return (
    <section className={`${className}`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Wrapper;
