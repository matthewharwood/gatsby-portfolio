import React, { FunctionComponent } from 'react';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';

import { GridType } from '../types';

const columnLength = {
  default: 4,
  small: 4,
  medium: 8,
  large: 12,
};
const gapWidth = {
  small: '16px',
  medium: '36px',
  large: '36px',
};
export const Grid: FunctionComponent<GridType> = ({
  $cols = [
    `repeat(${columnLength.default}, 1fr)`,
    `repeat(${columnLength.small}, 1fr)`,
    `repeat(${columnLength.medium}, 1fr)`,
    `repeat(${columnLength.large}, 1fr)`,
  ],
  $justifyItems = 'inherit',
  $alignItems = 'inherit',
  $marginTop = 'none',
  $marginBottom = 'none',
  children,
}) => {
  const [, theme] = useStyletron();
  const {
    sizing: { scale700, scale800, scale900, scale1000, scale1400, scale1600 },
  } = theme;

  const outerSpacingMap = {
    full: [scale1000, scale1000, scale1400, scale1600],
    half: [scale700, scale700, scale800, scale900],
    none: [0, 0, 0, 0],
  };

  return (
    <Block
      display="grid"
      gridTemplateColumns={$cols}
      height="100%"
      justifyItems={$justifyItems}
      alignItems={$alignItems}
      gridGap={[gapWidth.small, gapWidth.medium, gapWidth.large]}
      // @ts-ignore
      marginTop={outerSpacingMap[$marginTop]}
      // @ts-ignore
      marginBottom={outerSpacingMap[$marginBottom]}
    >
      {children}
    </Block>
  );
};
