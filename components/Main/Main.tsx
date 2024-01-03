import React, { FC } from 'react';
import Destination from '../Destination/Destination';
import Map from '../Map/Map';
import Nav from '../Nav/Nav';
import './styles.scss';

const Main: FC = () => {
  return (
    <main className="main">
      <Nav />
      <Map />
      <Destination />
    </main>
  );
};

export default Main;
