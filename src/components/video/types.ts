export type VideoType = {
  $color?: string;
  $backgroundColor?: string;
  title: string;
  caption: string;
  videoSrc: string;
  videoId: string;
  poster?: string;
};

export enum State {
  initial = 'INITIAL',
  play = 'PLAY',
  pause = 'PAUSE',
  stop = 'STOP',
}

export type VideoButtonType = {
  videoState: State;
  playVideo: () => void;
  pauseVideo: () => void;
};
