export type ImageType = {
  image: {
    asset: {
      id: string;
    };
  };
};

export type PropTypes = {
  images: Array<ImageType>;
  aspectRatio?: number;
};
