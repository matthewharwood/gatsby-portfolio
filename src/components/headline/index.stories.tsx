import React from 'react';
import { Headline } from './';

export default {
  title: 'headline',
};

const FIXTURE = {
  title: 'Headline Title',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fuga, temporibus repellat sed dolores architecto quasi laboriosam ratione nostrum illo.',
  $hasBottomMargin: true,
};

export const headlineStory = () => <Headline {...FIXTURE} />;
