import React, { FunctionComponent } from 'react';
import { Block } from 'baseui/block';

import { GridType } from '../types';

const columnLength = {
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
    `repeat(${columnLength.small}, 1fr)`,
    `repeat(${columnLength.small}, 1fr)`,
    `repeat(${columnLength.medium}, 1fr)`,
    `repeat(${columnLength.large}, 1fr)`,
  ],
  $justifyItems = 'inherit',
  children,
}) => {
  return (
    <Block
      display="grid"
      gridTemplateColumns={$cols}
      height="100%"
      justifyItems={$justifyItems}
      gridGap={[gapWidth.small, gapWidth.medium, gapWidth.large]}
    >
      {children}
    </Block>
  );
};
