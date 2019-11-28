import React, { FunctionComponent } from 'react';
import { Block } from 'baseui/block';

import { GridItemType } from '../types';

export const GridItem: FunctionComponent<GridItemType> = ({
  $alignSelf = 'center',
  $gridColumn = ['1/-1'],
  children,
}) => {
  return (
    <Block
      alignSelf={$alignSelf}
      display="grid"
      gridColumn={[...$gridColumn]}
      width="100%"
    >
      {children}
    </Block>
  );
};
