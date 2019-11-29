import React from 'react';
import { ImageSection } from './';

export default {
  title: 'image-section',
};

const imageAssetID =
  'image-614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600-jpg';

const FIXTURE = {
  image: {
    image: {
      asset: {
        id: imageAssetID,
      },
    },
  },
};

export const ImageSectionStory = () => <ImageSection {...FIXTURE} />;
