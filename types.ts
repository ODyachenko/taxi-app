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
};
