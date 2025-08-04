import React from 'react';
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaMicrosoft,
} from 'react-icons/fa';

export const SOCIAL_LINKS: Array<{
  readonly title: string;
  readonly url: string;
  readonly icon: React.ReactElement;
}> = [
  {
    title: 'Telegram',
    url: 'https://t.me/ekalkutin',
    icon: <FaTelegram />,
  },
  {
    title: 'GitHub',
    url: 'https://github.com/ekalkutin',
    icon: <FaGithub />,
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ekalkutin',
    icon: <FaLinkedin />,
  },
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/ecalcutin',
    icon: <FaInstagram />,
  },
  {
    title: 'Teams',
    url: 'https://teams.microsoft.com/l/chat/0/0?users=evgenii.kalkutin@gmail.com',
    icon: <FaMicrosoft />,
  },
];
