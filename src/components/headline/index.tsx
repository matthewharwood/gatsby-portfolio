import React from 'react';
import { Display1, Display3, Display4 } from 'baseui/typography';

const Headline = (props: any) => {
  return (
    <>
      <Display4>{props.eyebrow.text}</Display4>
      <Display1>{props.main.text}</Display1>
      <Display3>{props.sub.text}</Display3>
    </>
  );
};

export { Headline };
