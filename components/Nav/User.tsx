import Link from '@/node_modules/next/link';
import React, { FC } from 'react';

const User: FC = () => {
  return (
    <div className="nav__user user">
      {/* <Image /> */}
      <h1 className="user__name">Name</h1>
      <Link href={'/'}>View profile</Link>
    </div>
  );
};

export default User;
