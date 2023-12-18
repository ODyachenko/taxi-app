import SearchField from '@/UI/Field/SearchField';
import React, { FC } from 'react';
import DestinationList from './DestinationList';

type ChooseDestinationProps = {
  handler: () => void;
};

const ChooseDestination: FC<ChooseDestinationProps> = ({ handler }) => {
  return (
    <>
      <h2 className="destination__subtitle">Nice to see you!</h2>
      <h1 className="destination__title title">Where are you going?</h1>
      <SearchField handler={handler} />
      <DestinationList />
    </>
  );
};

export default ChooseDestination;
