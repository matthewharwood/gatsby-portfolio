import React, { useRef, MutableRefObject, FunctionComponent } from 'react';
import {
  ALIGN,
  StyledNavigationItem,
  StyledNavigationList,
  StyledRoot,
} from 'baseui/header-navigation';
import { Button, KIND, SHAPE, SIZE } from 'baseui/button';
import { useStyletron, withStyle } from 'baseui';
import { Link } from 'gatsby';
import { Hamburger } from './hamburger';
import { Boner } from './boner';
import { Drawer } from 'baseui/drawer';

const HeaderNavigationRoot = withStyle(StyledRoot, ({ $theme }) => ({
  paddingLeft: 0,
  paddingRight: $theme.sizing.scale600,
  backgroundColor: $theme.colors.primaryA,
  color: $theme.colors.primaryB,
  marginBottom: 0,
  position: 'sticky',
  top: 0,
  zIndex: 1,
  borderBottom: 0,
}));

const LogoText = () => {
  const [css, theme] = useStyletron();
  return (
    <h1
      className={css({
        ...theme.typography.font450,
        fontWeight: 700,
        marginTop: 0,
        marginBottom: 0,
      })}
    >
      MORNINGHARWOOD
    </h1>
  );
};
const NavigationItemContainer = ({ items }: any) => {
  const [css] = useStyletron();
  const classRef: MutableRefObject<any> = useRef();
  const activeClass = 'active';

  return items?.map?.((item: any, key: number) => (
    <StyledNavigationItem key={key}>
      <Link
        ref={classRef}
        className={css({
          textDecoration: 'none',
          color: 'inherit',
        })}
        activeClassName={activeClass}
        to={item.route}
      >
        <Button
          size={SIZE.default}
          shape={SHAPE.pill}
          kind={KIND.primary}
          isSelected={classRef?.current?.classList.contains(activeClass)}
          overrides={{
            BaseButton: {
              style: {
                fontWeight: 'bold',
              },
            },
          }}
        >
          {item.name}
        </Button>
      </Link>
    </StyledNavigationItem>
  ));
};
const Navigation: FunctionComponent<{
  toggle: Function;
  close: () => void;
  active: boolean;
  isLarge: boolean;
}> = ({ toggle, active, isLarge, close }) => {
  const navigationItems = [
    { name: 'WORK', route: '/work' },
    { name: 'LAB', route: '/lab' },
    { name: 'PROFILE', route: '/profile' },
  ];

  return (
    <>
      <HeaderNavigationRoot>
        <StyledNavigationList $align={ALIGN.left}>
          <StyledNavigationItem>
            <Boner />
          </StyledNavigationItem>
          {isLarge && (
            <StyledNavigationItem>
              <LogoText />
            </StyledNavigationItem>
          )}
        </StyledNavigationList>
        <StyledNavigationList $align={ALIGN.center}>
          {!isLarge && (
            <StyledNavigationItem>
              <LogoText />
            </StyledNavigationItem>
          )}
        </StyledNavigationList>
        <StyledNavigationList $align={ALIGN.right}>
          {isLarge ? (
            <NavigationItemContainer items={navigationItems} />
          ) : (
            <Button
              size={SIZE.default}
              shape={SHAPE.round}
              kind={KIND.primary}
              isSelected={false}
              // @ts-ignore
              onClick={toggle}
            >
              <Hamburger active={active} />
            </Button>
          )}
        </StyledNavigationList>
      </HeaderNavigationRoot>
      {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
      <Drawer isOpen={active} autoFocus onClose={close}>
        <NavigationItemContainer items={navigationItems} />
      </Drawer>
    </>
  );
};

export { Navigation };
