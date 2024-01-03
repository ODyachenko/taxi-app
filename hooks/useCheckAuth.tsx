'use client';

import { useEffect } from 'react';
import { redirect } from '@/node_modules/next/navigation';
import { useAppDispatch } from './hooks';
import { setCurrentUser, setIsAuth } from '@/redux/slices/userSlice';

const useCheckAuth = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userData = localStorage.getItem(
      `${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
    );

    if (userData) {
      dispatch(setIsAuth(true));
      dispatch(setCurrentUser(JSON.parse(userData)));

      return redirect('/home');
    }
    redirect('/login');
  }, []);
};

export default useCheckAuth;
