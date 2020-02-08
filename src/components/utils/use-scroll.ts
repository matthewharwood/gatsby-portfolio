import { useState, useEffect } from 'react';

const useScroll = () => {
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    function scrollHandler(event: any) {
      let delta;

      if (event.wheelDelta) {
        delta = event.wheelDelta;
      } else {
        delta = -1 * event.deltaY;
      }

      if (delta < 0) {
        setScroll(false);
      } else if (delta > 0) {
        setScroll(true);
      }
    }
    window.addEventListener('wheel', scrollHandler);
    return () => {
      window.removeEventListener('wheel', scrollHandler);
    };
  });

  return scroll;
};

export default useScroll;
