import React, { useRef, FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { H3 } from 'baseui/typography';
import { useStyletron } from 'baseui';
import useComponentSize from '@rehooks/component-size';
import { mq, display, positions, colors } from '../styles';

import { CardDataType } from '../../pages/lab/types';
import { MediaType } from './types';

// Structure:
// ----------
// Labcard
//     Img
//     imageOverlay
//         window
//         content
//             tags

const LabCard: FunctionComponent<{ data: CardDataType }> = ({ data }) => {
  const [css, theme] = useStyletron();

  // Variables
  const labPageLink = `/lab/${data.slug.current}`;
  const { image, video, title } = data;
  const tags = data.tags || [];
  const defaultMediaPreference = data.video ? 'video' : 'image';
  const mediaType = data.labCardBackgroundType
    ? data.labCardBackgroundType
    : defaultMediaPreference;

  // Tracking window height
  const cardRef = useRef(null);
  const { width: cardWidth } = useComponentSize(cardRef);
  const windowHeight = cardWidth / 2;

  // Tracking content height
  const contentRef = useRef(null);
  const { height: contentHeight } = useComponentSize(contentRef);

  const labCardWrapper = css({
    boxShadow: theme.lighting.shadow600,
    display: display.block,
    marginTop: theme.sizing.scale2400,
    marginBottom: theme.sizing.scale2400,
    position: positions.relative,
    height: `${windowHeight + contentHeight}px`,
    [mq.lg]: {
      marginLeft: theme.sizing.scale1200,
      marginRight: theme.sizing.scale1200,
    },
  });

  const imageOverlay = css({
    position: positions.absolute,
    height: `${contentHeight}px`,
    top: 0,
    right: 0,
    left: 0,
  });

  const windowClass = css({
    height: `${windowHeight}px`,
    background: colors.transparent,
  });

  const content = css({
    minHeight: `${windowHeight}px`,
    background: colors.primary300Opacity,
    paddingLeft: theme.sizing.scale500,
    paddingRight: theme.sizing.scale500,
    paddingTop: theme.sizing.scale900,
    paddingBottom: theme.sizing.scale500,
  });

  return (
    <Link to={labPageLink} className={labCardWrapper} ref={cardRef}>
      <Media image={image} video={video} mediaType={mediaType} />
      <div className={imageOverlay}>
        <div className={windowClass}></div>
        <div className={content} ref={contentRef}>
          <Tags tags={tags} />
          <H3>{title}</H3>
        </div>
      </div>
    </Link>
  );
};

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
        ></video>
      )}
    </>
  );
};

const Tags: FunctionComponent<{ tags?: Array<string> }> = ({ tags }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        height: theme.sizing.scale700,
      })}
    >
      {tags &&
        tags.map(tag => (
          <div
            className={css({
              fontSize: theme.sizing.scale500,
              backgroundColor: theme.colors.primary300,
              fontWeight: 'bold',
              padding: `${theme.sizing.scale0} ${theme.sizing.scale300}`,
              borderRadius: theme.sizing.scale100,
              color: theme.colors.primary700,
              display: 'inline-block',
              marginRight: theme.sizing.scale300,
            })}
          >
            {tag}
          </div>
        ))}
    </div>
  );
};

export default LabCard;
