import Btn from '@/UI/Btn/Btn';
import Field from '@/UI/Field/Field';
import Logo from '@/UI/Logo';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1>start</h1>
      <Btn value="Continue" weigth="light" />
      <Field type="text" placeholder="enter the name" />
    </>
  );
}
