import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import { useStyletron } from 'baseui';
import { Hamburger } from './hamburger';
import { colors, display, mq } from '../styles';
import { Boner } from '../boner';

import { NavbarType } from './types';

import { LogoType } from './logo-type';
import { NavList } from './nav-list';
import { ListItem } from './nav-list-item';

export const Navbar: FunctionComponent<NavbarType> = ({ show = true }) => {
  const [css, theme] = useStyletron();
  const lg = mq.lg;
  const [isNavToggle, setNavToggle] = useState(false);
  return (
    <nav
      className={css({
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        visibility: show ? 'visible' : 'hidden',
        transition: 'all .75s cubic-bezier(0.4, 0.0, 0.2, 1)',
        transform: show ? 'none' : 'translate(0, -100%)',
        backgroundColor: theme.colors.white,
        color: theme.colors.mono1000,
        textTransform: 'uppercase',
        display: display.flex,
        maxHeight: '60px',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: theme.sizing.scale600,
        paddingRight: theme.sizing.scale600,
        zIndex: theme.zIndex.modal,
        [lg]: {
          paddingLeft: theme.sizing.scale1600,
          paddingRight: theme.sizing.scale1600,
        },
      })}
    >
      <Hamburger
        isNavToggle={isNavToggle}
        toggleNav={() => setNavToggle(!isNavToggle)}
      />
      <NavHeader />
      <NavList>
        <ListItem title={'work'} />
        <ListItem title={'lab'} />
        <ListItem title={'profile'} />
      </NavList>
      <div
        className={css({
          width: theme.sizing.scale900,
          height: theme.sizing.scale900,
          backgroundColor: colors.transparent,
          [lg]: {
            display: display.none,
          },
        })}
      />
    </nav>
  );
};

const NavHeader = () => {
  const [css] = useStyletron();
  const lg = mq.lg;
  return (
    <div
      className={css({
        display: display.flex,
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        [lg]: {
          margin: 0,
        },
      })}
    >
      <Link
        to="/"
        className={css({
          textDecoration: 'none',
          color: 'inherit',
          display: 'flex',
        })}
      >
        <Boner size={70} pos={['6px', 'auto', 'auto', '6px']} />
        <LogoType />
      </Link>
    </div>
  );
};
