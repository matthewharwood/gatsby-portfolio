import React from 'react';
import { useStyletron } from "styletron-react";
const Hello = (props:any) => {
  const [css] = useStyletron();
  return (
    <p className={css({ color: props.color })}>hello world</p>
  );
}

export {Hello};