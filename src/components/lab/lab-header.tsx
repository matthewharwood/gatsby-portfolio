import { H1, H5 } from 'baseui/typography';
import React from 'react';
import { GridSpanFour } from './grid-span-four';

const LabHeader = () => {
  return (
    <>
      <GridSpanFour>
        <H1 marginBottom={0} color={'inherit'}>
          Labs
        </H1>
        <H5 marginTop={0}>A Laboratory of Experiments</H5>
      </GridSpanFour>
      <GridSpanFour />
      <GridSpanFour />
    </>
  );
};

export { LabHeader };
