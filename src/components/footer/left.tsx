import { useStyletron } from 'baseui';
import { useInView } from 'react-intersection-observer';
import React, { useState } from 'react';
import { useInterval } from '../utils/use-interval';
import { Label4 } from 'baseui/typography';
import { range } from '../utils/range';
import { getAge } from '../utils/get-age';

const BIRTH_YEAR = '1985-09-03';

export const FooterLeft = () => {
  const [css, theme] = useStyletron();
  const [ref, inView] = useInView({ triggerOnce: true });
  let [count, setCount] = useState(0);

  const mattAge = getAge(BIRTH_YEAR);
  const years = range(mattAge + 1, new Date().getFullYear() - mattAge);

  useInterval(() => {
    if (inView) {
      const len = years.length - 1;
      const next = count + 1;
      setCount(Math.min(next, len));
    }
  }, 80);

  return (
    <Label4 ref={ref}>
      <span className={css({ marginRight: theme.sizing.scale500 })}>
        &#xA9;
      </span>
      MORNING HARWOOD {years[count]}
    </Label4>
  );
};
