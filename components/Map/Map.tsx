'use client';

import React, { FC } from 'react';
import './styles.scss';
import Burger from '@/UI/Burger/Burger';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { setIsShow } from '@/redux/slices/NavSlice';
import { Map as MapBox } from 'react-map-gl';

const Map: FC = () => {
  const { isShow } = useAppSelector((state) => state.nav);
  const dispatch = useAppDispatch();

  return (
    <div className="map">
      <Burger
        className={isShow ? 'is-active' : ''}
        handler={() => dispatch(setIsShow(!isShow))}
      />
      <MapBox
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: 30.523333,
          latitude: 50.450001,
          zoom: 14,
        }}
        style={{ width: '100%', height: 500, borderRadius: 11 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
};

export default Map;
