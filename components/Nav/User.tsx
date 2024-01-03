import { useAppSelector } from '@/hooks/hooks';
import Image from '@/node_modules/next/image';
import Link from '@/node_modules/next/link';
import React, { FC } from 'react';

const User: FC = () => {
  const { currentUser } = useAppSelector((state) => state.user);

  return (
    <div className="nav__user user">
      <Image
        className="user__avatar"
        src={currentUser.avatarUrl}
        alt={currentUser.fullName}
        width={50}
        height={50}
      />
      <div className="user__info">
        <h1 className="user__name">{currentUser.fullName}</h1>
        <Link href={'/'}>View profile</Link>
      </div>
    </div>
  );
};

export default User;
