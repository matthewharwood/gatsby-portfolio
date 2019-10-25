import React, { FunctionComponent } from 'react';
import { useStyletron } from 'baseui';
import { Link } from 'gatsby';
import { mq, display, fontFamily } from '../styles';
import {useSpring, animated} from 'react-spring';
import BezierEasing from 'bezier-easing';

type NavLinkProps = {
  to: string;
  text: string;
  index: string;
};

const NavLinkIndex: FunctionComponent = ({ children }) => {
  const [css, theme] = useStyletron();
  const lg = mq.lg;
  const c = css({
    display: 'none',
    // fontFamily: fontFamily,
    color: 'inherit',
    fontSize: theme.sizing.scale500,
    paddingBottom: theme.sizing.scale100,
    paddingRight: theme.sizing.scale100,
    [lg]: {
      display: 'block',
    },
  });
  return <span className={c}>{children}</span>;
};

const NavLinkSpan: FunctionComponent = ({ children }) => {
  const [css, theme] = useStyletron();
  const lg = mq.lg;
  const c = css({
    display: display.flex,
    fontSize: theme.sizing.scale900,
    paddingBottom: theme.sizing.scale500,
    paddingRight: theme.sizing.scale4800,
    color: 'inherit',

    [lg]: {
      paddingLeft: theme.sizing.scale3200,
      paddingRight: theme.sizing.scale1200,
      fontSize: theme.sizing.scale1600,
    },
  });
  return <span className={c}>{children}</span>;
};

const NavLink: FunctionComponent<NavLinkProps> = ({
  text = '',
  index = '',
  to = '/',
}) => {
  const [css, theme] = useStyletron();
  const lg = mq.lg;
  const c = css({
    cursor: 'pointer',
    display: display.flex,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    textDecoration: 'none',
    borderBottom: `${theme.sizing.scale0} solid ${theme.colors.primary600}`,
    marginBottom: theme.sizing.scale600,
    overflow: 'hidden',
    transition: 'color 192ms ease-in-out',
    color: theme.colors.black,
    ':hover': {
      color: theme.colors.accent,
      borderBottom: `${theme.sizing.scale0} solid ${theme.colors.accent}`,
    },
    [lg]: {
      justifyContent: 'flex-end',
    },
  });
  const easing = BezierEasing(0.4, 0.0, 0.2, 1);
  const props = useSpring(
    {
      opacity: 1,
      transform: 'translateY(0)',
      from: {opacity: 0, transform: 'translateY(100%)'},
      delay: ((parseInt(index , 10)) * 300),
      config: {easing},
    },
  );
  return (

      <Link to={to} className={c}>
        <animated.div style={props}><NavLinkSpan>{text}</NavLinkSpan></animated.div>
        <NavLinkIndex>{`0${parseInt(index) + 1}`}</NavLinkIndex>
      </Link>

  );
};

export { NavLink };
