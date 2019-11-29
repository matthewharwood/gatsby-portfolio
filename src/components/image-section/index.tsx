import React, { useRef, FunctionComponent } from 'react';
import SanityImgFluid from '../sanity-img-fluid'

import { Container } from '../grid-system';
import { PropType } from './types'

const ImageSection: FunctionComponent<PropType> = ({ image }) => {
  return (
    <Container>
      <SanityImgFluid assetId={image.image.asset.id}/>
    </Container>
  );
};

export { ImageSection };
