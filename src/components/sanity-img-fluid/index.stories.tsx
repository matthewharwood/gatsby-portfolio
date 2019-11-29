import React from 'react';
import SanityImgFluid from './';

export default {
  title: 'sanityImgFluid',
};

const FIXTURE: any = {
  assetId: 'image-614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600-jpg',
};

export const toStorybook = () => <SanityImgFluid {...FIXTURE} />;

toStorybook.story = {
  name: 'Hexagons',
};
