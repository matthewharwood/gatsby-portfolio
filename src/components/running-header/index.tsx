import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import { useStyletron } from 'baseui';
import { useInterval } from './use-interval';
import { interests } from './interests';

const RunningHeader: FunctionComponent = () => {
  const [css, theme] = useStyletron();
  let [count, setCount] = useState(0);

  useInterval(() => {
    const len = interests.length - 1;
    const next = count + 1;
    setCount(next % len);
  }, 1000);
  return (
    <dl>
      <dt>Phone Number:</dt>
      <dd>
        <a href="tel:1-415-486-6018">Contact</a>
      </dd>
      <dt>e-mail:</dt>
      <dd>
        <a href={`mailto:matthhar12@gmail.com?subject=`} target={'_blank'}>
          {' '}
          <span>Let's talk about </span>
          <span>
            ✉ <i>{interests[count].name}</i>
          </span>
        </a>
      </dd>
    </dl>
  );
};
export { RunningHeader };
