import React, { FunctionComponent, useState } from 'react';
import { useStyletron } from 'baseui';
import { Label4 } from 'baseui/typography';
import { useInterval } from '../utils/use-interval';
import { interests } from '../../content/interests';
import { mq } from '../styles';
import { useTransition, animated } from 'react-spring';
import { StyledLink } from 'baseui/link';

const RunningHeader: FunctionComponent = () => {
  const [css, theme] = useStyletron();
  const lg = mq.lg;
  const [count, setCount] = useState(0);
  const [hovered, setHover] = useState(false);

  useInterval(() => {
    if (!hovered) {
      const len = interests.length - 1;
      const next = count + 1;
      setCount(0);
      setCount(next % len);
    }
  }, 1000);

  const renderTrans = (name: string) => {
    const transitions = useTransition(!!count, null, {
      from: {
        position: 'absolute',
        transform: 'translate3d(0, 20px, 0)',
        opacity: 0,
      },
      enter: {
        position: 'absolute',
        transform: 'translate3d(0, 0px, 0)',
        opacity: 1,
      },
      leave: { color: '#fff' },
    });

    return transitions.map(
      ({ item, key, props }) =>
        item && (
          <animated.span key={key} style={props}>
            {' '}
            {name}️
          </animated.span>
        )
    );
  };

  const cList = css({
    borderLeft: `${theme.sizing.scale100} solid ${theme.colors.accent}`,
    margin: 0,
    paddingLeft: theme.sizing.scale500,
    paddingTop: theme.sizing.scale800,
    paddingBottom: theme.sizing.scale500,
    listStyleType: 'none',
    width: '25%',
    ':hover': {
      color: theme.colors.accent,
    },
    [lg]: {
      paddingTop: 0,
      paddingBottom: 0,
      borderLeft: 'none',
      marginLeft: theme.sizing.scale700,
      marginTop: theme.sizing.scale1600,
      listStyleType: '&#128077;',
    },
  });
  const cItem = css({
    marginLeft: 0,
    paddingLeft: theme.sizing.scale100,
    paddingBottom: theme.sizing.scale300,
    fontSize: theme.sizing.scale500,
    color: 'inherit',
    [lg]: {
      paddingLeft: theme.sizing.scale700,
    },
  });
  const cItemLink = css({
    marginLeft: 0,
    paddingLeft: theme.sizing.scale100,
    paddingBottom: theme.sizing.scale300,
    fontSize: theme.sizing.scale500,
    cursor: 'pointer',
    color: 'inherit',
    [lg]: {
      paddingLeft: theme.sizing.scale700,
    },
  });

  const s = css({
    color: 'inherit',
  });

  return (
    <ul className={cList}>
      <li className={cItem}>
        <Label4 color={'inherit'}>Contact</Label4>
      </li>
      <li
        className={cItemLink}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <StyledLink
          style={{ textDecoration: 'none' }}
          href={`mailto:matthhar12@gmail.com?subject=${interests[count].name}`}
          target={'_blank'}
          color={'inherit'}
        >
          <span className={s}>Let&apos;s talk about </span>
          <span className={s}>
            ✉ <i>{renderTrans(interests[count].name)}</i>
          </span>
        </StyledLink>
      </li>
    </ul>
  );
};
export { RunningHeader };
