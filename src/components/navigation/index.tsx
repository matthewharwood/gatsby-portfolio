import React from 'react';
import {
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
  StyledRoot,
} from 'baseui/header-navigation';
import { Button, SHAPE, SIZE, KIND } from 'baseui/button';
import { useStyletron, withStyle } from 'baseui';


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
const Navigation = () => {
  const navigationItems = ['WORK', 'LABS', 'PROFILE'];
  return (
    <HeaderNavigationRoot>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <LogoText />
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        {navigationItems.map((item, key) => (
          <StyledNavigationItem key={key}>
            <Button
              size={SIZE.default}
              onClick={() => alert('click')}
              shape={SHAPE.pill}
              kind={KIND.primary}
            >
              {item}
            </Button>
          </StyledNavigationItem>
        ))}
      </StyledNavigationList>
    </HeaderNavigationRoot>
  );
};

export { Navigation };
