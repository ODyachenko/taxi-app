export type BtnProps = {
  value: string;
  weigth: string;
  handler?: () => void;
};

export type Field = {
  type: 'text' | 'email' | 'password' | 'number';
  placeholder: string;
  handler?: () => void;
};
