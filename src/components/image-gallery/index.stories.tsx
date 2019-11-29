import React from 'react';
import { ImageGallery } from './';

export default {
  title: 'image-gallery',
};

const imageAssetIdArray = [
  'image-0a308eb2e5a87f9f410eb570289aabe7e747fad6-1920x1080-jpg',
  'image-291d219599be8ec5a2737114a0244c7c15c0c3ed-3840x2160-jpg',
  'image-3d0569f9475d5d9f22fde6b12eab1f6f14218c78-720x1280-jpg',
  'image-43d03e66b958ccc4a4da69abf15a7c9250f913d5-3840x2160-jpg',
  'image-56af8e6cebfd52360f5d1737f5872c617b5fcf6d-1920x1080-jpg',
  'image-614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600-jpg',
  'image-cb5a91893241f0057ba1256fc0455acbd3b76ef2-1000x1000-jpg',
  'image-e41cf55dc2fd030a3450f6bb43a8f9faaa03ce2a-2560x1440-jpg',
];

const singleImageData = {
  images: imageAssetIdArray.slice(0,1).map(assetId => ({
    image: {
      asset: {
        id: assetId,
      },
    },
  })),
};

const twoImagesData = {
  images: imageAssetIdArray.slice(0,2).map(assetId => ({
    image: {
      asset: {
        id: assetId,
      },
    },
  })),
};

const threeImagesData = {
  images: imageAssetIdArray.slice(0,3).map(assetId => ({
    image: {
      asset: {
        id: assetId,
      },
    },
  })),
};

const fourImagesData = {
  images: imageAssetIdArray.slice(0,4).map(assetId => ({
    image: {
      asset: {
        id: assetId,
      },
    },
  })),
};

const eightImagesData = {
  images: imageAssetIdArray.slice(0,8).map(assetId => ({
    image: {
      asset: {
        id: assetId,
      },
    },
  })),
};

export const imageGalleryWithSingleImage = () => <ImageGallery {...singleImageData} />;
export const ImageGalleryWithTwoImages = () => <ImageGallery {...twoImagesData} />;
export const ImageGalleryWithThreeImages = () => <ImageGallery {...threeImagesData} />;
export const ImageGalleryWithFourImages = () => <ImageGallery {...fourImagesData} />;
export const ImageGalleryWithEightImages = () => <ImageGallery {...eightImagesData} />;
