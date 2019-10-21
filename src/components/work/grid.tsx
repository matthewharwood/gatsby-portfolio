import React from 'react';

import { useStyletron } from 'baseui';
import { mq, positions } from '../styles';

export const Grid = (props: any) => {
  const [css, theme] = useStyletron();

  const lg = mq.lg;
  const med = mq.md;
  return (
    <div
      className={css({
        display: 'grid',
        position: 'relative',
        height: '100%',
        gridTemplateRows: '20% 80%',
        gridTemplateColumns: 'unset',
        gridTemplateAreas: `"menuTitle" "menu"`,

        [med]: {
          gridTemplateRows: '20% 13.333% 66.6666%',
          gridTemplateColumns: 'unset',
          gridTemplateAreas: `"post" "menuTitle" "menu"`,
        },
        [lg]: {
          gridTemplateColumns: '40% 60%',
          gridTemplateRows: '20% 80%',
          gridTemplateAreas: `
          "menuTitle post"
          "menu post"`,
        },
      })}
    >
      {props.children}
    </div>
  );
};

export const GridItem = (props: any) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'grid',
        position: positions.relative,
        gridArea: props.gridArea,
      })}
    >
      {props.children}
    </div>
  );
};

export const GridItemInner = (props: any) => {
  const [css, theme] = useStyletron();
  const lg = mq.lg;
  const md = mq.md;

  return (
    <div
      className={css({
        paddingLeft: theme.sizing.scale700,
        paddingTop: theme.sizing.scale2400,
        [md]: {
          paddingLeft: theme.sizing.scale700,
          paddingTop: theme.sizing.scale800,
        },
        [lg]: {
          paddingLeft: theme.sizing.scale1600,
          paddingTop: theme.sizing.scale3200,
        },
      })}
    >
      {props.children}
    </div>
  );
};

export const GridPostItem = (props: any) => {
  const [css, theme] = useStyletron();
  const lg = mq.lg;
  const md = mq.md;

  return (
    <div
      className={css({
        position: positions.relative,
        display: 'none',
        [md]: {
          display: 'grid',
          gridArea: 'post',
        },
        [lg]: {
          display: 'grid',
          gridArea: 'post',
        },
      })}
    >
      {props.children}
    </div>
  );
};
