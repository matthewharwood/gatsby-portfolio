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
  const c = css({
    position: 'absolute',
    zIndex: theme.zIndex.modal,
  });
  return <i className={c}>{children}</i>;
};

const NavLinkSpan: FunctionComponent = ({ children }) => {
  const [css, theme] = useStyletron();
  const c = css({
    paddingTop: 0,
    paddingRight: theme.sizing.scale1400,
    paddingBottom: 0,
    paddingLeft: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
  });
  return <span className={c}>{children}</span>;
};

const NavLink: FunctionComponent<NavLinkProps> = ({
  text = '',
  index = '',
  to = '/',
  children,
}) => {
  const [css, theme] = useStyletron();
  const c = css({
    cursor: 'pointer',
    display: 'flex',
    position: 'relative',
    textDecoration: 'none',
  });
  return (
    <Link to={to} className={c}>
      <NavLinkSpan>{text}</NavLinkSpan>
      <NavLinkIndex>{index}</NavLinkIndex>
    </Link>
  );
};

export { NavLink };
