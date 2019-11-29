import React, { useRef, FunctionComponent } from 'react';
import { useStyletron } from 'baseui';
import { mq, display } from '../styles';
import useComponentSize from '@rehooks/component-size';
import SanityImgFluid from '../SanityImgFluid'

import { PropTypes } from './types'

const ImageGallery: FunctionComponent<PropTypes> = ({
  images,
}) => {
  const [css, theme] = useStyletron();
  const { sm, md, lg } = mq;

  const gridStyle = css({
    display: display.grid,
    gridTemplateColumns: 'repeat(1, 1fr)',
    marginTop: theme.sizing.scale900,
    marginBottom: theme.sizing.scale900,
    gridGap: theme.sizing.scale800,
    [sm]: {
      gridTemplateColumns: 'repeat(1, 1fr)',
    },
    [md]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [lg]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  });

  const ref = useRef(null);
  const size = useComponentSize(ref);
  const { width } = size;

  const imgStyle = css({
    width: '100%',
    height: `${width/(16/9)}px`,
    objectFit: 'cover',
  });


  return (
    <div className={gridStyle}>
      {images.map(image => (
        <div ref={ref}><SanityImgFluid assetId={image.image.asset.id} className={imgStyle}/></div>
      ))}
    </div>
  );
};

export { ImageGallery };
