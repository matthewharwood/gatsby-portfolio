import React from 'react';
import { LabCard } from './';

export default {
  title: 'lab-card',
};

const dataFromSanity = {
  data: {
    sanityLab: {
      tags: ['one', 'two', 'three'],
      slug: {
        current: 'test-lab-1',
      },
      status: 'doing',
      title: 'Test Lab 1',
      labCardBackgroundType: null,
      image: {
        asset: {
          fluid: {
            base64:
              'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAwj/xAAiEAACAgECBwEAAAAAAAAAAAABAgAREgMxBBMiMkFRYXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AzzdAUApH2TYyJyHw+ouWAXmYr1eAIcIw13KstDfeBa+rTb1+iEXbVcs14GjXbCB//9k=',
            aspectRatio: 1.6,
            src:
              'https://cdn.sanity.io/images/42nykw3g/production/614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600.jpg?w=800&h=500&fit=crop',
            srcSet:
              'https://cdn.sanity.io/images/42nykw3g/production/614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600.jpg?w=200&h=125&fit=crop 200w,\nhttps://cdn.sanity.io/images/42nykw3g/production/614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600.jpg?w=400&h=250&fit=crop 400w,\nhttps://cdn.sanity.io/images/42nykw3g/production/614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600.jpg?w=800&h=500&fit=crop 800w,\nhttps://cdn.sanity.io/images/42nykw3g/production/614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600.jpg?w=1200&h=750&fit=crop 1200w,\nhttps://cdn.sanity.io/images/42nykw3g/production/614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600.jpg?w=1600&h=1000&fit=crop 1600w,\nhttps://cdn.sanity.io/images/42nykw3g/production/614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600.jpg?w=2400&h=1500&fit=crop 2400w,\nhttps://cdn.sanity.io/images/42nykw3g/production/614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600.jpg?w=2560&h=1600&fit=crop 2560w',
            srcWebp:
              'https://cdn.sanity.io/images/42nykw3g/production/614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600.jpg?w=800&h=500&fit=crop&fm=webp',
            srcSetWebp:
              'https://cdn.sanity.io/images/42nykw3g/production/614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600.jpg?w=200&h=125&fit=crop&fm=webp 200w,\nhttps://cdn.sanity.io/images/42nykw3g/production/614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600.jpg?w=400&h=250&fit=crop&fm=webp 400w,\nhttps://cdn.sanity.io/images/42nykw3g/production/614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600.jpg?w=800&h=500&fit=crop&fm=webp 800w,\nhttps://cdn.sanity.io/images/42nykw3g/production/614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600.jpg?w=1200&h=750&fit=crop&fm=webp 1200w,\nhttps://cdn.sanity.io/images/42nykw3g/production/614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600.jpg?w=1600&h=1000&fit=crop&fm=webp 1600w,\nhttps://cdn.sanity.io/images/42nykw3g/production/614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600.jpg?w=2400&h=1500&fit=crop&fm=webp 2400w,\nhttps://cdn.sanity.io/images/42nykw3g/production/614fcc394f8b0057c04e5cd332b542e0a8ed1ffb-2560x1600.jpg?w=2560&h=1600&fit=crop&fm=webp 2560w',
            sizes: '(max-width: 800px) 100vw, 800px',
          },
        },
      },
    },
  },
};

const dataForLabCardWithImage = {
  ...dataFromSanity.data.sanityLab,
  maxWidth:500,
};

const dataForLabCardWithVideo = {
  ...dataFromSanity.data.sanityLab,
  video: {
    asset: {
      url: 'http://techslides.com/demos/sample-videos/small.webm',
    },
  },
  maxWidth:500,
};

export const labCardWithImage = () => <LabCard data={dataForLabCardWithImage} />;
export const labCardWithVideo = () => <LabCard data={dataForLabCardWithVideo} />;

labCardWithImage.story = {
  name: 'LabCard with Image',
};

labCardWithImage.story = {
  name: 'LabCard with Video',
};
