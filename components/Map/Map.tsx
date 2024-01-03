'use client';

import Image from '@/node_modules/next/image';
import React, { FC } from 'react';
import map from '@/public/map.jpeg';
import './styles.scss';
import Burger from '@/UI/Burger/Burger';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setIsShow } from '@/redux/slices/NavSlice';

const Map: FC = () => {
  const { isShow } = useAppSelector((state) => state.nav);
  const dispatch = useAppDispatch();

  return (
    <div className="map">
      <Burger
        className={isShow ? 'is-active' : ''}
        handler={() => dispatch(setIsShow(!isShow))}
      />
      <Image src={map} alt="map" />
    </div>
  );
};

export default Map;
