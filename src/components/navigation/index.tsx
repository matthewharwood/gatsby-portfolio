import React, { useRef, MutableRefObject, FunctionComponent } from 'react';
import {
  ALIGN,
  StyledNavigationItem,
  StyledNavigationList,
  StyledRoot,
} from 'baseui/header-navigation';
import { Button, KIND, SHAPE, SIZE } from 'baseui/button';
import { useStyletron, withStyle } from 'baseui';
import { useMediaQuery } from '../utils/use-media-query';
import { Link } from 'gatsby';
import { Hamburger } from './hamburger';

const HeaderNavigationRoot = withStyle(StyledRoot, ({ $theme }) => ({
  paddingLeft: 0,
  paddingRight: $theme.sizing.scale600,
  backgroundColor: $theme.colors.primaryA,
  color: $theme.colors.primaryB,
  marginBottom: 0,
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
const Navigation: FunctionComponent<{ toggle: Function; active: boolean }> = ({
  toggle,
  active,
}) => {
  const [, theme] = useStyletron();

  const isLarge = useMediaQuery(theme.mediaQuery.large);
  const navigationItems = [
    { name: 'WORK', route: '/work' },
    { name: 'LABS', route: '/labs' },
    { name: 'PROFILE', route: '/profile' },
  ];

  return (
    <HeaderNavigationRoot>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <LogoText />
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
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
  );
};

export { Navigation };
