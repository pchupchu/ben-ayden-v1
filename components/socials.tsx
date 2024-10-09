'use client';

import Link from 'next/link';

import { FaDribbble, FaGithub, FaYoutube } from 'react-icons/fa';

const icons = [
  {
    path: '/',
    name: <FaGithub />,
  },
  {
    path: '/',
    name: <FaYoutube />,
  },
  {
    path: '/',
    name: <FaDribbble />,
  },
];

interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {icons.map((icon, index) => {
        return (
          <Link key={index} href={icon.path} className={iconStyles}>
            {icon.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
