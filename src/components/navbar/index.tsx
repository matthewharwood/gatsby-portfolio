import React, { useState, memo } from 'react';
import Logo from '../icons/logo';
import { Link } from 'gatsby';
import { useStyletron } from 'baseui';
import { H5, Label2 } from 'baseui/typography';
import Grab from 'baseui/icon/grab';
import Delete from 'baseui/icon/delete';
import { mq, display, colors } from '../styles';
import { Boner } from '../boner';

export const Navbar = memo(({ show = true }: any) => {
  const [css, theme] = useStyletron();
  console.log('rerendere');
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
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: theme.sizing.scale600,
        paddingRight: theme.sizing.scale600,
        paddingTop: theme.sizing.scale500,
        paddingBottom: theme.sizing.scale500,
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
});

const Hamburger = ({
  isNavToggle,
  toggleNav,
}: {
  isNavToggle: Boolean;
  toggleNav: Function;
}) => {
  const [css, theme] = useStyletron();
  const lg = mq.lg;
  return (
    <span
      onClick={() => toggleNav()}
      className={css({
        [lg]: {
          display: display.none,
        },
      })}
    >
      {isNavToggle ? <Delete size={32} /> : <Grab size={32} />}
    </span>
  );
};

const NavHeader = () => {
  const [css, theme] = useStyletron();
  const md = mq.md;
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
        <H5
          color={'inherit'}
          className={css({
            marginLeft: theme.sizing.scale600,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            display: display.none,
            position: 'relative',
            top: '0px',
            [md]: {
              display: display.block,
            },
            [lg]: {
              display: display.block,
            },
          })}
        >
          Morning Harwood
        </H5>
      </Link>
    </div>
  );
};

const NavList = ({ children }: { children: React.ReactNode }) => {
  const [css, theme] = useStyletron();
  const lg = mq.lg;
  return (
    <ul
      className={css({
        listStyle: 'none',
        display: display.none,
        [lg]: {
          display: display.flex,
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
    <Link
      className={css({
        textDecoration: 'none',
        color: 'inherit',
      })}
      to={title}
    >
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
    </Link>
  );
};
