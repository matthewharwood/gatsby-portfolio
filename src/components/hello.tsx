import React from 'react';
import { useStyletron } from "styletron-react";
const Hello = () => {
  const [css] = useStyletron();
  return (
    <p className={css({ color: "red" })}>hello world</p>
  );
}

export {Hello};