import Image from '@/node_modules/next/image';
import React, { FC } from 'react';
import map from '@/public/map.jpeg';
import './styles.scss';
import Burger from '@/UI/Burger/Burger';

const Map: FC = () => {
  return (
    <div className="map">
      <Burger />
      <Image src={map} alt="map" />
    </div>
  );
};

export default Map;
