import { Link } from '@/types';
import React, { FC } from 'react';

const NavLink: FC<Link> = ({ icon, value }) => {
  return (
    <li className="nav__list-link">
      {icon}
      {value}
    </li>
  );
};

export default NavLink;
