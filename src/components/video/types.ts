export type VideoType = {
  $color?: string;
  $backgroundColor?: string;
  title: string;
  caption: string;
  videoSrc: string;
  videoId: string;
  poster?: string;
};

export type VideoButtonType = {
  videoState: 'INITIAL' | 'PLAY' | 'PAUSE' | 'STOP';
  playVideo: () => void;
  pauseVideo: () => void;
};

export type VideoTitleType = {
  title: string;
};
