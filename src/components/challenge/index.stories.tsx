import React from 'react';
import { Challenge } from './';
// @ts-ignore

export default {
  title: 'Challenge',
};

const FIXTURE = {
  challengeNum: '1',
  challengeText: 'this is challenge text',
  solution: 'this is solution text',
  takeaway: 'this is take away',
};

export const toStorybook = () => <Challenge {...FIXTURE} />;

toStorybook.story = {
  name: 'Challenge Story',
};
