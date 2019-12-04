// @flow
import React, { FunctionComponent } from 'react';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';

import { useMediaQuery } from '../../utils/use-media-query';

import { AutoplayVideoProps } from '../types';

const autoplayVideoMapper = (video: any): AutoplayVideoProps => ({
  fallback: {
    webM: video.videoUrl360Webm,
    mp4: video.videoUrl360Mp4,
  },
  small: {
    webM: video.videoUrl480Webm,
    mp4: video.videoUrl480Mp4,
  },
  medium: {
    webM: video.videoUrl720Webm,
    mp4: video.videoUrl720Mp4,
  },
  large: {
    webM: video.videoUrl1080Webm,
    mp4: video.videoUrl1080Mp4,
  },
});

const hasAutoplayVideo = (video: AutoplayVideoProps) =>
  Boolean(
    video &&
      video.fallback &&
      video.small &&
      video.medium &&
      video.large &&
      (video.fallback.webM ||
        video.fallback.mp4 ||
        video.small.webM ||
        video.small.mp4 ||
        video.medium.webM ||
        video.medium.mp4 ||
        video.large.webM ||
        video.large.mp4)
  );

const VideoBackground: FunctionComponent<AutoplayVideoProps> = props => {
  const { fallback, small, medium, large } = props;
  const [, theme] = useStyletron();
  const { mediaQuery } = theme;
  const isSmall = useMediaQuery(mediaQuery.small);
  const isMedium = useMediaQuery(mediaQuery.medium);
  const isLarge = useMediaQuery(mediaQuery.large);

  return hasAutoplayVideo(props) ? (
    <Block
      as="video"
      height="auto"
      left="50%"
      minHeight="100%"
      minWidth="100%"
      position="absolute"
      top="50%"
      overrides={{
        Block: {
          style: () => ({
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
          }),
        },
      }}
      // @ts-ignore
      autoPlay
      loop
      muted
      playsInline
    >
      {!isSmall && !isMedium && !isLarge && (
        <>
          {fallback && fallback.webM && (
            <source src={fallback.webM} type="video/webm" />
          )}
          {fallback && fallback.mp4 && (
            <source src={fallback.mp4} type="video/mp4" />
          )}
        </>
      )}

      {isSmall && !isMedium && !isLarge && (
        <>
          {small && small.webM && <source src={small.webM} type="video/webm" />}
          {small && small.mp4 && <source src={small.mp4} type="video/mp4" />}
        </>
      )}

      {isMedium && !isLarge && (
        <>
          {medium && medium.webM && (
            <source src={medium.webM} type="video/webm" />
          )}
          {medium && medium.mp4 && <source src={medium.mp4} type="video/mp4" />}
        </>
      )}

      {isLarge && (
        <>
          {large && large.webM && <source src={large.webM} type="video/webm" />}
          {large && large.mp4 && <source src={large.mp4} type="video/mp4" />}
        </>
      )}
    </Block>
  ) : null;
};

export { VideoBackground, hasAutoplayVideo, autoplayVideoMapper };
