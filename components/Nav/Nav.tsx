'use client';

import React, { FC } from 'react';
import NavList from './NavList';
import User from './User';
import './styles.scss';
import Btn from '@/UI/Btn/Btn';
import { useAppSelector } from '@/hooks/hooks';

const Nav: FC = () => {
  const { isShow } = useAppSelector((state) => state.nav);

  return (
    <nav className={`nav block ${isShow ? 'show' : ''}`}>
      <div className="container">
        <User />
        <NavList />
        {/* <Btn value="Sign Up To Drive" weigth="bold" /> */}
      </div>
    </nav>
  );
};

export default Nav;
