import Image from '@/node_modules/next/image';
import Btn from '@/UI/Btn/Btn';
import React, { FC } from 'react';
import car from '@/public/car.png';
import './styles.scss';

const Promotions: FC = () => {
  return (
    <>
      <div className="promotions__inner">
        <Image
          className="promotions__img"
          src={car}
          alt="car"
          width={257}
          height={158}
        />
        <h1 className="promotions__title">Ride together!</h1>
        <p className="promotions__text">
          Bolt is a great way to move in the city with friends
        </p>
      </div>
      <div className="promotions__footer">
        <span className="promotions__code">
          <span>Tap to copy code</span>
          <strong>EMENALOK8</strong>
        </span>
        <Btn className="promotions__btn" value="Share Code" weigth="bold" />
      </div>
    </>
  );
};

export default Promotions;
