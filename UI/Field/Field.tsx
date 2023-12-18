import React, { FC } from 'react';
import './styles.scss';
import { Field } from '@/types';

const Field: FC<Field> = ({ type, placeholder, handler }) => {
  return (
    <input
      className="field"
      type={type}
      placeholder={placeholder}
      onChange={handler}
      required
    />
  );
};

export default Field;
