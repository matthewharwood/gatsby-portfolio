import React, { FunctionComponent } from 'react';
import { MediaType } from './types';
import { useStyletron } from 'baseui';
import Img from 'gatsby-image';

const Media: FunctionComponent<MediaType> = ({ image, video, mediaType }) => {
  const [css] = useStyletron();

  const img = css({
    height: '100%',
    width: '100%',
    position: 'relative',
    objectFit: 'cover',
  });

  return (
    <>
      {mediaType === 'image' ? (
        <Img fluid={image.asset.fluid} className={img} />
      ) : (
        <video
          src={video.asset.url}
          className={img}
          autoPlay={true}
          muted={true}
          loop={true}
        />
      )}
    </>
  );
};

export { Media };
