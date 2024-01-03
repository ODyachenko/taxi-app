import React, { FC } from 'react';
import { BurgerProps } from '@/types';
import './styles.scss';

const Burger: FC<BurgerProps> = ({ className, handler }) => {
  return (
    <button
      className={`hamburger hamburger--arrow ${className}`}
      onClick={handler}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default Burger;
