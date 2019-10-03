import React from 'react';
import { useStyletron } from 'baseui';

export const Section = ({
  $backgroundColor,
  $color,
  $borderBottom,
  $collapsePaddingBottom,
  $collapsePaddingTop,
  children,
}: any) => {
  const [css, theme] = useStyletron();
  const bgColor = $backgroundColor || 'inherit';
  const color = $color || 'inherit';

  const className = css({
    backgroundColor: bgColor,
    boxSizing: 'border-box',
    color: color,
    display: theme.display.block,
    paddingTop: $collapsePaddingTop ? 0 : theme.sizing.scale1000,
    paddingBottom: $collapsePaddingBottom ? 0 : theme.sizing.scale1000,
    paddingLeft: theme.sizing.scale800,
    paddingRight: theme.sizing.scale800,
    width: '100%',
    [theme.mq.md]: {
      background: bgColor,
      paddingTop: $collapsePaddingTop ? 0 : theme.sizing.scale1400,
      paddingBottom: $collapsePaddingBottom ? 0 : theme.sizing.scale1400,
      paddingLeft: theme.sizing.scale1200,
      paddingRight: theme.sizing.scale1200,
    },
    [theme.mq.lg]: {
      background: bgColor,
      paddingTop: $collapsePaddingTop ? 0 : theme.sizing.scale1600,
      paddingBottom: $collapsePaddingBottom ? 0 : theme.sizing.scale1600,
      paddingLeft: theme.sizing.scale1200,
      paddingRight: theme.sizing.scale1200,
    },
  });
  return <section className={className}>{children}</section>;
};

export const Container = ({ children, $borderBottom, $color }: any) => {
  const [css, theme] = useStyletron();
  const borderBottom = $borderBottom
    ? `${$color} ${theme.sizing.scale0} solid`
    : 'none';

  const className = css({
    margin: '0 auto',
    borderBottom: borderBottom,
    background: 'inherit',
    maxWidth: '599px',
    paddingBottom: borderBottom !== 'none' ? theme.sizing.scale1000 : 0,
    [theme.mq.md]: {
      maxWidth: '1039px',
      paddingBottom: borderBottom !== 'none' ? theme.sizing.scale1400 : 0,
    },
    [theme.mq.lg]: {
      maxWidth: '1032px',
      paddingBottom: borderBottom !== 'none' ? theme.sizing.scale1600 : 0,
    },
  });
  return <div className={className}>{children}</div>;
};

export const Grid = ({ children, $gridColumn = '1/-1' }: any) => {
  const [css, theme] = useStyletron();

  const className = css({
    background: 'inherit',
    display: theme.display.grid,
    gridGap: theme.sizing.scale800,
    gridTemplateColumns: 'repeat(4, 1fr)',
    width: '100%',
    gridColumn: $gridColumn,
    [theme.mq.md]: {
      gridGap: theme.sizing.scale1200,
      gridTemplateColumns: 'repeat(6, 1fr)',
    },
    [theme.mq.lg]: {
      gridGap: theme.sizing.scale1200,
      gridTemplateColumns: 'repeat(12, 1fr)',
    },
  });
  return <div className={className}>{children}</div>;
};
