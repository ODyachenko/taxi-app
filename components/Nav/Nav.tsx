import React, { FC } from 'react';
import NavList from './NavList';
import User from './User';
import './styles.scss';
import Btn from '@/UI/Btn/Btn';

const Nav: FC = () => {
  return (
    <nav className="nav block">
      <div className="container">
        <User />
        <NavList />
        <Btn value="Sign Up To Drive" weigth="bold" />
      </div>
    </nav>
  );
};

export default Nav;
