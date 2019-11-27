import React, { useRef, FunctionComponent } from 'react';
import SanityImgFluid from '../SanityImgFluid'

import { Container } from '../grid-system';

const ImageSection: FunctionComponent<{ image: string }> = ({ image }) => {
  return (
    <Container>
      <SanityImgFluid assetId={image.image.asset.id}/>
    </Container>
  );
};

export default ImageSection;
