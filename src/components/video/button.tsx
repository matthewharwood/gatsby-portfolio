import React from 'react';
import { useStyletron } from 'baseui';

import iconReplay from '../icons/replay';
import iconPause from '../icons/pause';
import iconPlay from '../icons/play';

enum State {
  initial = 'INITIAL',
  play = 'PLAY',
  pause = 'PAUSE',
  stop = 'STOP',
}
interface VideoButton {
  videoState: State;
  playVideo: () => void;
  pauseVideo: () => void;
}
export const VideoButton = ({
  videoState,
  playVideo,
  pauseVideo,
}: VideoButton) => {
  const [css, theme] = useStyletron();
  const stateMap = {
    [State.initial]: {
      backgroundColor: theme.colors.accent,
      hoverBg: theme.colors.negative400,
      trigger: playVideo,
      icon: iconPlay,
    },
    [State.play]: {
      backgroundColor: theme.colors.accent,
      hoverBg: theme.colors.negative400,
      trigger: pauseVideo,
      icon: iconPause,
    },
    [State.pause]: {
      backgroundColor: theme.colors.accent,
      hoverBg: theme.colors.negative400,
      trigger: playVideo,
      icon: iconPlay,
    },
    [State.stop]: {
      backgroundColor: theme.colors.positive200,
      hoverBg: theme.colors.positive300,
      trigger: playVideo,
      icon: iconReplay,
    },
  };

  const currentState = stateMap[videoState];

  return (
    <button
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
        cursor: 'pointer',
        border: 0,
        boxShadow: theme.lighting.shadow500,
        transition: 'background-color 200ms linear',
        ":hover": {
          backgroundColor: currentState.hoverBg,
        }
      })}
      onClick={() => currentState.trigger()}
    >
      <currentState.icon/>
    </button>
  );
};
