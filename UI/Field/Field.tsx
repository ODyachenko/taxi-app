import React, { FC } from 'react';
import './styles.scss';
import { Field } from '@/types';

const Field: FC<Field> = ({
  className,
  type,
  placeholder,
  handler,
  register,
}) => {
  return (
    <input
      className={`field ${className}`}
      type={type}
      placeholder={placeholder}
      onChange={handler}
      {...register}
      required
    />
  );
};

export default Field;
