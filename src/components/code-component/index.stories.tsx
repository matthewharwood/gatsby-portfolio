import React from 'react';
import { CodeComponent } from './';
import { Props } from './types';

export default {
  title: CodeComponent.name,
};

const FIXTURE: Props = {
  code: `const gridStyle = css({
    display: display.grid,
    gridTemplateColumns: 'repeat(1, 1fr)',
    marginTop: theme.sizing.scale900,
    marginBottom: theme.sizing.scale900,
    gridGap: theme.sizing.scale800,
    [sm]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
    [md]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [lg]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  });`,
};

export const toStorybook = () => <CodeComponent {...FIXTURE} />;

toStorybook.story = {
  name: 'Code Component',
};
