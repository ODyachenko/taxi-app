'use client';

import useCheckAuth from '@/hooks/useCheckAuth';
import Logo from '@/UI/Logo';

export default function Splash() {
  useCheckAuth();

  return (
    <div className="splash">
      <Logo color="#fff" />
    </div>
  );
}
