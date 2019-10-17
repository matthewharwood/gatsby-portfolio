import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import { useStyletron } from 'baseui';

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function useInterval(callback?: () => void, delay?: number) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    // @ts-ignore
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      // @ts-ignore
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function shuffle(array: Array<{ name: string }>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const interests: Array<{ name: string }> = shuffle([
  { name: 'the future' },
  { name: 'the future' },
  { name: 'architecture' },
  { name: 'my work' },
  { name: 'your work' },
  { name: 'collaboration' },
  { name: 'dank memes' },
  { name: 'OOP vs. Functional' },
  { name: 'design' },
  { name: 'guitar' },
  { name: 'inspirational people' },
  { name: 'love' },
  { name: 'travel' },
  { name: 'singularity' },
  { name: 'creativity' },
  { name: 'mixed, virtual, augmented reality' },
  { name: 'art' },
  { name: 'imagination' },
  { name: 'problem solving' },
  { name: 'space' },
  { name: 'cooking' },
  { name: 'FOMO' },
  { name: 'ontological design' },
  { name: 'flow state' },
  { name: 'foreign languages' },
  { name: 'streaming on the internet' },
  { name: 'video games' },
  { name: 'coffee' },
  { name: 'crypto currency' },
  { name: 'javascript fatigue' },
  { name: 'framework wars' },
  { name: 'blockchain' },
  { name: 'smart contracts' },
  { name: 'just emailing me' },
  { name: 'wasm' },
  { name: 'rust lang' },
  { name: 'ethereum' },
  { name: 'university' },
  { name: 'engineering software' },
]);

const RunningHeader: FunctionComponent = () => {
  const [css, theme] = useStyletron();
  let [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
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
