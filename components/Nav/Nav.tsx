'use client';

import React, { FC } from 'react';
import NavList from './NavList';
import User from './User';
import './styles.scss';
import Btn from '@/UI/Btn/Btn';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { logoutUser } from '@/redux/slices/userSlice';
import { redirect, useRouter } from '@/node_modules/next/navigation';

const Nav: FC = () => {
  const { isShow } = useAppSelector((state) => state.nav);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <nav className={`nav block ${isShow ? 'show' : ''}`}>
      <div className="container">
        <User />
        <NavList />
        <Btn
          value="Log Out"
          weigth="bold"
          handler={() => dispatch(logoutUser(router))}
        />
      </div>
    </nav>
  );
};

export default Nav;
