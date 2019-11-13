import React, { useRef, useEffect, FunctionComponent } from 'react';
import { H3 } from 'baseui/typography';
import { useStyletron } from 'baseui';
import useComponentSize from '@rehooks/component-size';
import { colors } from '../styles';
import { mq } from '../styles';

import { CardDataType } from '../lab-card'

// Structure:
// ----------
// Labcard
//     CardInner
//         Image
//         CardBody
//             ImageWindow
//             Content
//                 Tags
//                 Body

const LabCard: FunctionComponent<{data:CardDataType}> = ({ data }) => {
  const [css, theme] = useStyletron();
  const image = data.image || '';
  // const image = 'https://picsum.photos/500';
  const tags = data.tags || [];
  const title = data.title || 'Test Title 1';

  return (
    <div
      className={css({
        gridColumn: 'span 4',
        marginTop: theme.sizing.scale300,
        marginBottom: theme.sizing.scale300,
        padding: `${theme.sizing.scale1200} 0`,
        [mq.lg]: {
          padding: `${theme.sizing.scale1200}`,
        }
      })}
    >
      <CardInner image={image} title={title} tags={tags} />
    </div>
  );
};

const CardInner: FunctionComponent<CardDataType> = ({ image, tags, title }) => {
  const [css, theme] = useStyletron();
  const c = css({
    position: 'relative',
    overflow: 'hidden',
    boxShadow: theme.lighting.shadow600,
  });

  return (
    <div className={c}>
      <Image image={image} />
      <CardBody isImage={image !== ''} tags={tags} title={title}/>
    </div>
  );
};

const Image: FunctionComponent<{image:string}> = ({ image }) => {
  const [css, ] = useStyletron();
  const c = css({
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
  });
  return <img className={c} src={image} alt="" />;
};

type CardBodyDataType = {
  isImage: Boolean,
  tags?: Array<string>;
  title: string;
}
const CardBody: FunctionComponent<CardBodyDataType> = ({ isImage, tags, title }) => {
  const [css, theme] = useStyletron();
  const c = css({
    zIndex: 10,
    position: 'relative',
  });

  return (
    <div className={c}>
      <ImageWindow isImage={isImage} />
      <div
        style={{
          background: colors.primary300Opacity,
          color: theme.colors.primary700,
          margin: 0,
          padding: '20px',
        }}
      >
        <Content tags={tags} title={title}/>
      </div>
    </div>
  );
};

const Content: FunctionComponent<{tags? : Array<string>; title: string}> = ({ tags, title }) => {
  const [css] = useStyletron();
  const ref = useRef(null);
  const size = useComponentSize(ref);
  const { width } = size;
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: `${width / 3}px`,
      })}
      ref={ref}
    >
      <Tags tags={tags} />
      <H3 color={'inherit'}>{title}</H3>
    </div>
  );
};

const ImageWindow: FunctionComponent<{isImage:Boolean}> = ({ isImage }) => {
  const ref = useRef(null);
  const size = useComponentSize(ref);
  const { width } = size;

  const [css] = useStyletron();

  return (
    <div
      ref={ref}
      className={css({
        height: isImage ? `${width * 0.6}px` : 0,
        width: '100%',
      })}
    ></div>
  );
};

const Tags: FunctionComponent<{tags?: Array<string>}> = ({ tags }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        height: theme.sizing.scale700,
      })}
    >
      {tags && tags.map(tag => (
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
