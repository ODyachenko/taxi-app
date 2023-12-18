import Image from '@/node_modules/next/image';
import React, { FC } from 'react';
import Destination from '../Destination/Destination';
import './styles.scss';
import map from '@/public/map.jpeg';

const Main: FC = () => {
  return (
    <main className="main">
      <div>
        <Image src={map} alt="map" />
      </div>
      <Destination />
    </main>
  );
};

export default Main;
