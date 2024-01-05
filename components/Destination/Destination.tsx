'use client';

import React, { FC, useState } from 'react';
import ChooseDestination from './ChooseDestination';
import EnterDestination from './EnterDestination';
import './styles.scss';

const Destination: FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onCLickHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section className="destination">
      {isClicked ? (
        <EnterDestination handler={onCLickHandler} />
      ) : (
        <ChooseDestination handler={onCLickHandler} />
      )}
    </section>
  );
};

export default Destination;
