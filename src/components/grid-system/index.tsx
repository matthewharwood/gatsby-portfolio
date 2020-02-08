import React from 'react';
import { useStyletron } from 'baseui';
import { mq, display } from '../styles';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

export const Section = ({
  $backgroundColor,
  $color,
  $collapsePaddingBottom,
  $collapsePaddingTop,
  children,
}: any) => {
  const [css, theme] = useStyletron();
  const [ref, inView] = useInView({ triggerOnce: true });
  const props = useSpring({ opacity: inView ? 1 : 0 });
  const FadeInSection = animated.div;

  const bgColor = $backgroundColor || 'inherit';
  const color = $color || 'inherit';

  const className = css({
    backgroundColor: bgColor,
    boxSizing: 'border-box',
    color: color,
    display: display.block,
    paddingTop: $collapsePaddingTop ? 0 : theme.sizing.scale1000,
    paddingBottom: $collapsePaddingBottom ? 0 : theme.sizing.scale1000,
    paddingLeft: theme.sizing.scale800,
    paddingRight: theme.sizing.scale800,
    width: '100%',
    [mq.md]: {
      background: bgColor,
      paddingTop: $collapsePaddingTop ? 0 : theme.sizing.scale1400,
      paddingBottom: $collapsePaddingBottom ? 0 : theme.sizing.scale1400,
      paddingLeft: theme.sizing.scale1200,
      paddingRight: theme.sizing.scale1200,
    },
    [mq.lg]: {
      background: bgColor,
      paddingTop: $collapsePaddingTop ? 0 : theme.sizing.scale1600,
      paddingBottom: $collapsePaddingBottom ? 0 : theme.sizing.scale1600,
      paddingLeft: theme.sizing.scale1200,
      paddingRight: theme.sizing.scale1200,
    },
  });
  return (
    <FadeInSection style={props}>
      <section className={className} ref={ref}>
        {children}
      </section>
    </FadeInSection>
  );
};

export const Container = ({
  children,
  $borderBottom,
  $color,
  $backgroundColor,
  $paddingBottom,
}: any) => {
  const [css, theme] = useStyletron();
  const borderBottom = $borderBottom ? `${$color} 1px solid` : 'none';
  const backgroundColor = $backgroundColor || 'inherit';
  const className = css({
    margin: '0 auto',
    borderBottom: borderBottom,
    background: 'inherit',
    maxWidth: '599px',
    paddingBottom: borderBottom !== 'none' ? theme.sizing.scale1000 : 0,
    backgroundColor: backgroundColor,
    [mq.md]: {
      maxWidth: '1039px',
      paddingBottom: borderBottom !== 'none' ? theme.sizing.scale1400 : 0,
    },
    [mq.lg]: {
      maxWidth: '1032px',
      padding: theme.sizing.scale1600,
      paddingBottom:
        $paddingBottom || borderBottom !== 'none' ? theme.sizing.scale1600 : 0,
    },
  });
  return <div className={className}>{children}</div>;
};

export const GridItemLeft = ({ leftCols, orderLeft, children }: any) => {
  const [css] = useStyletron();
  const c = {
    className: css({
      order: orderLeft,
      display: 'grid',
      gridColumn: `span ${leftCols[0]}`,
      [mq.md]: {
        gridColumn: `span ${leftCols[1]}`,
      },
      [mq.lg]: {
        gridColumn: `span ${leftCols[2]}`,
      },
    }),
  };

  return <div {...c}>{children}</div>;
};

export const GridItemRight = ({
  rightCols,
  orderRight,
  children,
  hidden = false,
}: any) => {
  const [css] = useStyletron();
  const c = {
    className: css({
      order: orderRight,
      display: hidden ? 'hidden' : 'grid',
      gridColumn: `span ${rightCols[0]}`,
      [mq.md]: {
        gridColumn: `span ${rightCols[1]}`,
      },
      [mq.lg]: {
        gridColumn: `span ${rightCols[2]}`,
      },
    }),
  };

  return <div {...c}>{children}</div>;
};

export const Grid = ({
  children,
  $gridColumn = '1/-1',
  $gridGap,
  $alignItems,
}: any) => {
  const [css, theme] = useStyletron();

  const className = css({
    background: 'inherit',
    display: display.grid,
    gridGap: $gridGap || theme.sizing.scale800,
    gridTemplateColumns: 'repeat(4, 1fr)',
    width: '100%',
    gridColumn: $gridColumn,
    alignItems: $alignItems || 'normal',
    [mq.md]: {
      width: '100%',
      gridGap: theme.sizing.scale1200,
      gridTemplateColumns: 'repeat(6, 1fr)',
    },
    [mq.lg]: {
      gridTemplateColumns: 'repeat(12, 1fr)',
    },
  });
  return <div className={className}>{children}</div>;
};

export const GridItemHalf = ({ children }: any) => {
  const [css] = useStyletron();
  const c = {
    className: css({
      display: 'grid',
      gridColumn: 'span 6',
    }),
  };

  return <div {...c}>{children}</div>;
};
