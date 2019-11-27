import React, { useRef, FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { H3 } from 'baseui/typography';
import { useStyletron } from 'baseui';
import useComponentSize from '@rehooks/component-size';
import { mq, display, positions } from '../styles';
import { Window } from './window';
import { Tag, VARIANT } from 'baseui/tag';
import { CardDataType } from '../../pages/lab/types';
import { Media } from './media';
import { ImageOverlay } from './image-overlay';

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

  const content = css({
    minHeight: `${windowHeight}px`,
    background: 'rgba(255,255,255,0.95)',
    paddingLeft: theme.sizing.scale500,
    paddingRight: theme.sizing.scale500,
    paddingTop: theme.sizing.scale900,
    paddingBottom: theme.sizing.scale500,
  });

  return (
    <Link to={labPageLink} className={labCardWrapper} ref={cardRef}>
      <Media image={image} video={video} mediaType={mediaType} />
      <ImageOverlay contentHeight={contentHeight}>
        <Window windowHeight={windowHeight} />
        <div className={content} ref={contentRef}>
          {tags.map((t, i) => (
            <Tag
              variant={VARIANT.outlined}
              closeable={false}
              kind="primary"
              key={i}
            >
              {t}
            </Tag>
          ))}
          <H3>{title}</H3>
        </div>
      </ImageOverlay>
    </Link>
  );
};

export { LabCard };
