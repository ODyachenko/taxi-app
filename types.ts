export type BtnProps = {
  value: string;
  weigth: string;
  handler?: () => void;
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
