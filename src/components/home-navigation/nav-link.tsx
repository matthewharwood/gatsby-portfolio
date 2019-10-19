import React, { FunctionComponent } from 'react';
import { useStyletron } from 'baseui';
import { Link } from 'gatsby';

type NavLinkProps = {
  to: string;
  text: string;
  index: string;
};

const NavLinkIndex: FunctionComponent = ({ children }) => {
  const [css, theme] = useStyletron();
  const lg = theme.mq.lg;
  const c = css({
    display: 'none',
    [lg]: {
      display: 'block',
    }
  });
  return <span className={c}>{children}</span>;
};

const NavLinkSpan: FunctionComponent = ({ children }) => {
  const [css, theme] = useStyletron();
  const lg = theme.mq.lg;
  const c = css({
    display: theme.display.flex,
    fontSize: theme.sizing.scale900,
    paddingBottom: theme.sizing.scale500,
    paddingRight: theme.sizing.scale4800,
    [lg]: {
      paddingLeft: theme.sizing.scale3200,
      paddingRight: theme.sizing.scale1200,
      fontSize: theme.sizing.scale1600,
    }
  });
  return <span className={c}>{children}</span>;
};

const NavLink: FunctionComponent<NavLinkProps> = ({
  text = '',
  index = '',
  to = '/',
}) => {
  const [css, theme] = useStyletron();
  const lg = theme.mq.lg;
  const c = css({
    cursor: 'pointer',
    display: theme.display.flex,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    textDecoration: 'none',
    borderBottom: `${theme.sizing.scale0} solid ${theme.colors.primary600}`,
    marginBottom: theme.sizing.scale600,
    ":hover": {
      color: theme.colors.accent,
    },
    [lg]: {
      justifyContent: 'flex-end',
    }
  });
  return (
    <Link to={to} className={c}>
      <NavLinkSpan>{text}</NavLinkSpan>
      <NavLinkIndex>{`0${parseInt(index) + 1}`}</NavLinkIndex>
    </Link>
  );
};

export { NavLink };
