import { H1, H5 } from 'baseui/typography';
import React from 'react';
import { Block } from 'baseui/block';

const LabHeader = () => {
  return (
    <>
      <Block
        gridColumn="-1/1"
        paddingTop={'scale800'}
        alignSelf={'stretch'}
        color={'primary700'}
        paddingLeft={[0, 0, 0, 'scale1200']}
      >
        <H1 marginBottom={0} color={'inherit'}>
          Labs
        </H1>
        <H5 marginTop={0}>A Laboratory of Experiments</H5>
      </Block>
    </>
  );
};

export { LabHeader };
