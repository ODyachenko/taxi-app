import React, { FC } from 'react';
import { BurgerProps } from '@/types';
import './styles.scss';

const Burger: FC<BurgerProps> = ({ handler }) => {
  return (
    <button className="burger" onClick={handler}>
      <span></span>
    </button>
  );
};

export default Burger;
