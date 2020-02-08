import React, { FunctionComponent } from 'react';
import SanityImgFluid from '../sanity-img-fluid';

import { Grid } from '../@design-system/block-layout';
import { Block } from 'baseui/block';
import { PropType } from './types';

const ImageSection: FunctionComponent<PropType> = ({ image }) => {
  return (
    <Grid $marginTop="full">
      <Block gridColumn={['1/-1', '1/-1', '1/-1', '2/12']}>
        <SanityImgFluid assetId={image.image.asset.id} />
      </Block>
    </Grid>
  );
};

export { ImageSection };
