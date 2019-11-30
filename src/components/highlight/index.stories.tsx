import React from 'react';
import { Highlight } from './';

export default {
  title: 'highlight',
};

const FIXTURE = {
  full: false,
  $color: '#212121',
  $accentColor: 'tomato',
  $borderBottom: false,
  eyebrow: '02',
  title: 'Title',
  body:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt inventore consequatur',
  leftCols: [4,6,8],
  rightCols: [4,6,4],
  orderLeft: 0,
  orderRight: 1,
};

export const HighlightStory = () => <Highlight {...FIXTURE} />;
