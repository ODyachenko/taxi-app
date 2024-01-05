import React, { FC } from 'react';
import Destination from '../Destination/Destination';
import Map from '../Map/Map';
import Nav from '../Nav/Nav';
import './styles.scss';

const Main: FC = () => {
  return (
    <main className="main block">
      <Nav />
      <div className="container">
        <Map />
        <Destination />
      </div>
    </main>
  );
};

export default Main;
