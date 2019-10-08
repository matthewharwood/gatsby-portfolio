import React, { useRef, useContext, useEffect, useState } from 'react';
import { ActiveVideoContext }  from '../../pages/index';

import {
  Section,
  Container,
  Grid,
  GridItemLeft,
  GridItemRight,
} from '../grid-system';
import { useStyletron } from 'baseui';
import { Paragraph2, Label2 } from 'baseui/typography';
import { ProgressBar } from 'baseui/progress-bar';

import iconReplay from './icon-replay.svg';
import iconPause from './icon-pause.svg';
import iconPlay from './icon-play.svg';

const VideoButton = ({
  videoState,
  playVideo,
  pauseVideo,
}:any) => {
  const [css, theme] = useStyletron();
  const stateMap = {
    initial: {
      backgroundColor: theme.colors.accent,
      trigger: playVideo,
      icon: iconPlay,
    },
    play: {
      backgroundColor: theme.colors.accent,
      trigger: pauseVideo,
      icon: iconPause,
    },
    pause: {
      backgroundColor: theme.colors.accent,
      trigger: playVideo,
      icon: iconPlay,
    },
    stop: {
      backgroundColor: theme.colors.positive200,
      trigger: playVideo,
      icon: iconReplay,
    },
  };

  const currentState = stateMap[videoState];

  return (
    <div
      className={css({
        width: theme.sizing.scale1000,
        height: theme.sizing.scale1000,
        background: currentState.backgroundColor,
        borderRadius: '100%',
        display: theme.display.flex,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: theme.sizing.scale700,
        marginLeft: 'auto',
        marginRight: 'auto',
        cursor:'pointer',
      })}
      onClick={() => currentState.trigger()}
    >
      <img src={currentState.icon} alt="" className={css({ width: '12px' })} />
    </div>
  );
};

const VideoItem = ({ id, src }:any) => {
  const [css, theme] = useStyletron();
  const videoPlayer = useRef();

  const { activeVideoID, setActiveVideoId } = useContext(ActiveVideoContext);

  const isVideoActive = (id === activeVideoID);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoState, setVideoState] = useState('initial');
  const progress = (currentTime / duration * 100);

  const playVideo = () => {
    enableVideo();
    setVideoState('play');
    videoPlayer.current.play();
  };

  const pauseVideo = () => {
    setVideoState('pause');
    videoPlayer.current.pause();
  };

  const stopVideo = () => {
    setVideoState('stop');
  }

  const enableVideo = () => {
    setActiveVideoId(id);
  }

  // Checks if change in global activeVideoID enables the video
  useEffect(() => {
    if(isVideoActive && videoState === 'play'){
      playVideo();
    } else {
      if(videoState !== 'stop'){
        pauseVideo();
      }
    }
  },[activeVideoID]);

  return (
    <div>
      <video
        ref={videoPlayer}
        onLoadedMetadata={e => setDuration(e.target.duration)}
        onTimeUpdate={e => setCurrentTime(e.target.currentTime)}
        onEnded={() => stopVideo()}
        className={css({ width: '100%' })}
        src={src}
      ></video>
      <ProgressBar
        value={progress}
        overrides={{
          BarProgress: {
            style: () => ({
              backgroundColor:
                videoState == 'stop'
                  ? theme.colors.positive200
                  : theme.colors.accent,
            }),
          },
          Bar: {
            style: () => ({
              marginTop: 0,
              marginBottom: 0,
              marginLeft: 0,
              marginRight: 0,
              background: theme.colors.transparent,
            }),
          },
        }}
      />
      <VideoButton
        videoState={videoState}
        playVideo={playVideo}
        pauseVideo={pauseVideo}
        replayVideo={playVideo}
        enableVideo={enableVideo}
      />
    </div>
  );
};

export const Video = ({
  $color,
  $backgroundColor,
  title,
  caption,
  videoSrc = 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4',
  videoID,
}:any) => {
  const [css, theme] = useStyletron();
  const color = $color || theme.colors.primary700;
  const bgColor = $backgroundColor || theme.colors.primary50;

  return (
    <Section $backgroundColor={bgColor} $color={color}>
      <Container $color={theme.colors.primary300} $borderBottom={false}>
        <Grid>
          <GridItemLeft leftCols={8} orderLeft={0}>
            <VideoItem
              id={videoID}
              src={videoSrc}
            />
          </GridItemLeft>
          <GridItemRight rightCols={4} orderRight={1}>
            <div>
              <Label2
                className={css({
                  color: theme.colors.primary500,
                  textTransform: 'uppercase',
                })}
              >
                {title}
              </Label2>
              <Paragraph2>{caption}</Paragraph2>
            </div>
          </GridItemRight>
        </Grid>
      </Container>
    </Section>
  );
};
