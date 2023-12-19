'use client';

import { redirect } from '@/node_modules/next/navigation';
import { setCurrentUser, setIsAuth } from '@/redux/slices/userSlice';
import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';

const useCheckAuth = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userData = localStorage.getItem(
      `${process.env.NEXT_PUBLIC_accessToken}`
    );
    if (userData) {
      dispatch(setIsAuth(true));
      dispatch(setCurrentUser(userData));
    }
  }, []);
};

export default useCheckAuth;
