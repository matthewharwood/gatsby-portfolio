import React from 'react';
import Logo from '../icons/logo';
import { useStyletron } from 'baseui';
import { H5, Label2 } from 'baseui/typography';
import Grab from 'baseui/icon/grab';

export const Navbar = () => {
  const [css, theme] = useStyletron();
  const lg = theme.mq.lg;
  return (
    <nav
      className={css({
        backgroundColor: theme.colors.primary,
        color: theme.colors.mono100,
        textTransform: 'uppercase',
        display: theme.display.flex,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: theme.sizing.scale600,
        paddingRight: theme.sizing.scale600,
        paddingTop: theme.sizing.scale500,
        paddingBottom: theme.sizing.scale500,
        [lg]: {
          paddingLeft: theme.sizing.scale1600,
          paddingRight: theme.sizing.scale1600,
        },
      })}
    >
      <Hamburger />
      <NavHeader />
      <NavList>
        <ListItem title={'work'} />
        <ListItem title={'lab'} />
        <ListItem title={'about'} />
      </NavList>
      <div
        className={css({
          width: theme.sizing.scale900,
          height: theme.sizing.scale900,
          backgroundColor: theme.colors.transparent,
          [lg]: {
            display: theme.display.none,
          },
        })}
      ></div>
    </nav>
  );
};

const Hamburger = () => {
  const [css, theme] = useStyletron();
  const lg = theme.mq.lg;
  return (
    <span
      className={css({
        [lg]: {
          display: theme.display.none,
        },
      })}
    >
      <Grab size={32} />
    </span>
  );
};

const NavHeader = () => {
  const [css, theme] = useStyletron();
  const md = theme.mq.md;
  const lg = theme.mq.lg;
  return (
    <div
      className={css({
        display: theme.display.flex,
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        [lg]: {
          margin: 0,
        },
      })}
    >
      <Logo />
      <H5
        color={'inherit'}
        marginLeft={theme.sizing.scale600}
        margin={0}
        className={css({
          display: theme.display.none,
          [md]: {
            display: theme.display.block,
          },
          [lg]: {
            display: theme.display.block,
          },
        })}
      >
        Morning Harwood
      </H5>
    </div>
  );
};

const NavList = ({ children }: { children: React.ReactNode }) => {
  const [css, theme] = useStyletron();
  const lg = theme.mq.lg;
  return (
    <ul
      className={css({
        listStyle: 'none',
        display: theme.display.none,
        [lg]: {
          display: theme.display.flex,
        },
      })}
    >
      {children}
    </ul>
  );
};

const ListItem = ({ title }: { title: string }) => {
  const [css, theme] = useStyletron();
  return (
    <li
      className={css({
        marginLeft: theme.sizing.scale1600,
      })}
    >
      <Label2
        color={'inherit'}
        margin={0}
        className={css({
          fontSize: theme.sizing.scale600,
        })}
      >
        {title}
      </Label2>
    </li>
  );
};
