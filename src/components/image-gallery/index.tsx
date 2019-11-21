import React, { useRef, FunctionComponent } from 'react';
import { useStyletron } from 'baseui';
import { mq, display } from '../styles';
import useComponentSize from '@rehooks/component-size';

type imageType = {
  src: string;
  id: string;
  altText: string;
};

const ImageGallery: FunctionComponent<{ images: Array<imageType> }> = ({
  images,
}) => {
  /* console.log(images); */
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
        <img
          ref={ref}
          key={image._key}
          className={imgStyle}
          src={image.image.asset.url}
          alt={image.altText}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
