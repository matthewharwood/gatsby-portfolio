import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import { useStyletron } from 'baseui';
import { useInterval } from './use-interval';
import { interests } from './interests';

const RunningHeader: FunctionComponent = () => {
  const [css, theme] = useStyletron();
  const lg = theme.mq.lg;
  let [count, setCount] = useState(0);

  useInterval(() => {
    const len = interests.length - 1;
    const next = count + 1;
    setCount(next % len);
  }, 1000);

  const cList = css({
    borderLeft: `${theme.sizing.scale100} solid ${theme.colors.accent}`,
    margin: 0,
    paddingLeft: theme.sizing.scale500,
    paddingTop: theme.sizing.scale800,
    paddingBottom: theme.sizing.scale500,
    listStyleType: 'none',
    [lg]: {
      paddingTop: 0,
      paddingBottom: 0,
      borderLeft: 'none',
      marginLeft: theme.sizing.scale700,
      marginTop: theme.sizing.scale1600,
      listStyleType: "&#128077;",
    },
  });
  const cItem = css({
    marginLeft: 0,
    paddingLeft: theme.sizing.scale100,
    paddingBottom: theme.sizing.scale300,
    fontSize: theme.sizing.scale500,
    [lg]: {
      paddingLeft: theme.sizing.scale700,
    }
  });
  const a = css({
    textDecoration: 'none',
  });
  return (
    <ul className={cList}>
      <li className={cItem}>
        <a className={a} href="tel:1-415-486-6018">
          Contact
        </a>
      </li>
      <li className={cItem}>
        <a
          className={a}
          href={`mailto:matthhar12@gmail.com?subject=`}
          target={'_blank'}
        >
          <span>Let's talk about </span>
          <span>
            ✉ <i>{interests[count].name}</i>
          </span>
        </a>
      </li>
    </ul>
  );
};
export { RunningHeader };
