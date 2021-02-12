import React from 'react';
import { FaEnvelopeOpenText, FaGithub, FaHome, FaUser } from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaHome />,
    cName: 'nav-text',
  },
  {
    title: 'About',
    path: '/about',
    icon: <FaUser />,
    cName: 'nav-text',
  },
  {
    title: 'Repositories',
    path: '/repositories',
    icon: <FaGithub />,
    cName: 'nav-text',
  },

  {
    title: 'Contact',
    path: '/contact',
    icon: <FaEnvelopeOpenText />,
    cName: 'nav-text',
  },
];
