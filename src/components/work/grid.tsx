import React from 'react';

import { useStyletron } from 'baseui';

export const Grid = props => {
  const [css, theme] = useStyletron();

  const lg = theme.mq.lg;
  const med = theme.mq.md;
  return (
    <div
      className={css({
        display: 'grid',
        position: 'relative',
        height: '100%',
        gridTemplateRows: '20% 80%',
        gridTemplateColumns: 'unset', gridTemplateAreas: `"menuTitle" "menu"`,

        [med]: {
          gridTemplateRows: '20% 13.333% 66.6666%',
          gridTemplateColumns: 'unset',
          gridTemplateAreas: `"post" "menuTitle" "menu"`,
        },
        [lg]: {
          gridTemplateColumns: '40% 60%',
          gridTemplateRows: '33.3333% 66.6666%',
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

export const GridItem = props => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'grid',
        position: theme.positions.relative,
        gridArea: props.gridArea,
      })}
    >
      {props.children}
    </div>
  );
};

export const GridItemInner = props => {
  const [css, theme] = useStyletron();
  const lg = theme.mq.lg;
  const md = theme.mq.md;

  return (
    <div
      className={css({
        paddingLeft: theme.sizing.scale700,
        paddingTop: theme.sizing.scale700,
        [md]: {
          paddingLeft: theme.sizing.scale700,
          paddingTop: theme.sizing.scale800,
        },
        [lg]: {
          paddingLeft: theme.sizing.scale1600,
          paddingTop: theme.sizing.scale1600,
        },
      })}
    >
      {props.children}
    </div>
  );
};

export const GridPostItem = props => {
  const [css, theme] = useStyletron();
  const lg = theme.mq.lg;
  const md = theme.mq.md;

  return (
    <div
      className={css({
        position: theme.positions.relative,
        display: 'none',
        [md]: {
          display: 'grid',
          gridArea: 'post',
        },
        [lg]: {
          display: 'grid',
          gridArea: 'post',
        }
      })}
    >
      {props.children}
    </div>
  );
};
