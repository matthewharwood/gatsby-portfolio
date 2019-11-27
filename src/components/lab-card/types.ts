import { ImageType } from '../../pages/lab/types';

export type MediaType = {
  image: ImageType;
  video: {
    asset: {
      url: string;
    };
  };
  mediaType?: string;
};

export type ImageOverlayT = {
  contentHeight: number;
};

export type WindowT = {
  windowHeight: number;
};
