import React from 'react';
import { Nav } from './nav';
import { NavLink } from './nav-link';
const HomeNavigation = () => {
  return (
    <Nav>
      <NavLink to="/work" index="00" text="Work" />
      <NavLink to="/lab" text="Lab" index="01" />
      <NavLink to="/profile" index="02" text="Profile" />
    </Nav>
  );
};

const Schema = { href: 'string', text: 'string' };

export { HomeNavigation, Schema };
