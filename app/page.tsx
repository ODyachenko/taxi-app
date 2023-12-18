'use client';

import Main from '@/components/Main/Main';
import useCheckAuth from '@/hooks/useCheckAuth';

export default function Home() {
  useCheckAuth();

  return <Main />;
}
