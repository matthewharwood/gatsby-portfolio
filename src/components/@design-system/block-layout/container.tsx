import React, { FunctionComponent } from 'react';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';

import { ContainerType } from '../types';

const containerWidth = {
  small: '100%',
  medium: '100%',
  large: '1280px',
};

export const Container: FunctionComponent<ContainerType> = props => {
  const [, theme] = useStyletron();
  const {
    colors,
    sizing: {
      scale500,
      scale600,
      scale700,
      scale800,
      scale900,
      scale1000,
      scale1400,
      scale1600,
    },
  } = theme;
  const {
    $alignSelf = 'flex-start',
    $backgroundColor = colors.background,
    $backgroundTransparent,
    $marginBottom = 'full',
    $marginTop = 'full',
    $paddingBottom = 'full',
    $paddingLeft = 'full',
    $paddingRight = 'full',
    $paddingOuterLeft = 'full',
    $paddingOuterRight = 'full',
    $paddingTop = 'full',
    $textColor = colors.primary,
    children,
  } = props;
  const bgColor = $backgroundTransparent ? 'transparent' : $backgroundColor;
  const textColor = $textColor ? $textColor : 'inherit';

  const outerSpacingMap = {
    full: [scale1000, scale1000, scale1400, scale1600],
    half: [scale700, scale700, scale800, scale900],
    none: [0, 0, 0, 0],
  };

  const innerSpacingMapSides = {
    full: [scale800, scale800, scale900, scale1600],
    half: [scale500, scale500, scale600, scale900],
    none: [0, 0, 0, 0],
  };

  const innerSpacingMapEnds = {
    full: [scale1000, scale1000, scale1400, scale1600],
    half: [scale700, scale700, scale800, scale900],
    none: [0, 0, 0, 0],
  };

  return (
    <Block
      alignSelf={$alignSelf}
      // @ts-ignore
      paddingTop={outerSpacingMap[$marginTop]}
      // @ts-ignore
      paddingBottom={outerSpacingMap[$marginBottom]}
      paddingLeft={outerSpacingMap[$paddingOuterLeft]}
      paddingRight={outerSpacingMap[$paddingOuterRight]}
      marginLeft="auto"
      marginRight="auto"
      maxWidth={[
        containerWidth.small,
        containerWidth.small,
        containerWidth.medium,
        containerWidth.large,
      ]}
      width="100%"
    >
      <Block
        backgroundColor={bgColor}
        className="container-inner"
        color={textColor}
        // @ts-ignore
        paddingBottom={innerSpacingMapEnds[$paddingBottom]}
        // @ts-ignore
        paddingLeft={innerSpacingMapSides[$paddingLeft]}
        // @ts-ignore
        paddingRight={innerSpacingMapSides[$paddingRight]}
        // @ts-ignore
        paddingTop={innerSpacingMapEnds[$paddingTop]}
      >
        {children}
      </Block>
    </Block>
  );
};
