import React from 'react';

export type Wrapper = {
  className: string;
  children: React.ReactNode;
};

export type BtnProps = {
  className?: string;
  value: string;
  weigth: string;
  handler?: () => void;
};

export type BurgerProps = {
  handler?: () => void;
};

export type Link = {
  id: string;
  value: string;
  icon: React.ReactNode;
};

export type Field = {
  className?: string;
  type: 'text' | 'email' | 'password' | 'number' | 'search';
  placeholder: string;
  handler?: () => void;
  register?: any;
};

export type User = {
  id: string;
  email: string;
  phone: string;
  fullName: string;
  avatarUrl: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};
