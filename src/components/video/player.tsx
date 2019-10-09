import React, { useState, useRef, useEffect, useContext } from 'react';

import { useStyletron } from 'baseui';
import { ProgressBar } from 'baseui/progress-bar';
import { AspectRatioBox, AspectRatioBoxBody } from 'baseui/aspect-ratio-box';

import { VideoButton } from './button';
import { ActiveVideoContext } from '../../pages/index';

interface Props {
  videoId: string;
  videoSrc: string;
  poster?: string;
}
export const Player = ({ videoId, videoSrc, poster }: Props) => {
  const [css, theme] = useStyletron();
  const videoPlayer = useRef();

  enum State {
    initial = 'INITIAL',
    play = 'PLAY',
    pause = 'PAUSE',
    stop = 'STOP',
  }

  const { activeVideoID, setActiveVideoId } = useContext(ActiveVideoContext);

  const isVideoActive = videoId === activeVideoID;
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoState, setVideoState] = useState(State.initial);
  const progress = (currentTime / duration) * 100;

  const playVideo = () => {
    enableVideo();
    setVideoState(State.play);
    videoPlayer.current.play();
  };

  const pauseVideo = () => {
    setVideoState(State.pause);
    videoPlayer.current.pause();
  };

  const stopVideo = () => {
    setVideoState(State.stop);
  };

  const enableVideo = () => {
    setActiveVideoId(videoId);
  };

  // Checks if change in global activeVideoID enables the video
  useEffect(() => {
    if (isVideoActive && videoState === State.play) {
      playVideo();
    } else {
      if (videoState !== State.stop && videoState !== State.initial) {
        pauseVideo();
      }
    }
  }, [activeVideoID]);

  return (
    <>
      <AspectRatioBox aspectRatio={16 / 9}>
        <AspectRatioBoxBody>
          <video
            ref={videoPlayer}
            onLoadedMetadata={e => setDuration(e.target.duration)}
            onTimeUpdate={e => setCurrentTime(e.target.currentTime)}
            onEnded={() => stopVideo()}
            className={css({
              width: '100%',
            })}
            src={videoSrc}
            poster={poster}
          ></video>
          <ProgressBar
            value={progress}
            overrides={{
              BarProgress: {
                style: () => ({
                  marginTop: `-${theme.sizing.scale100}`,
                  backgroundColor:
                    videoState === State.stop
                      ? theme.colors.positive200
                      : theme.colors.accent,
                  transition: '0.1s ease 0s',
                }),
              },
              Bar: {
                style: () => ({
                  height: theme.sizing.scale200,
                  marginTop: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  backgroundColor: theme.colors.transparent,
                }),
              },
            }}
          />
        </AspectRatioBoxBody>
      </AspectRatioBox>
      <VideoButton
        videoState={videoState}
        playVideo={playVideo}
        pauseVideo={pauseVideo}
        replayVideo={playVideo}
        enableVideo={enableVideo}
      />
    </>
  );
};
