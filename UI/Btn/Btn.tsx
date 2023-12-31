import React, { FC } from 'react';
import './styles.scss';
import { BtnProps } from '@/types';

const Btn: FC<BtnProps> = ({ className, value, weigth, handler }) => {
  return (
    <button
      className={`${className} btn ${weigth}`}
      type="submit"
      onClick={handler}
    >
      {value}
    </button>
  );
};

export default Btn;
