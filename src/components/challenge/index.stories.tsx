import React from 'react';
import { Challenge } from './';
// @ts-ignore

export default {
  title: 'Challenge',
};

const FIXTURE = {
  challengeNum: '1',
  challengeText:
    'Create a tool that is intuitive, ergonomic, and flexible enough for teams to collaborate in building a web page for Nike Jordan.',
  solution:
    'In 2014, the Nike Jordan brand had just reimagined their visual design, from which came a new color palette and typeface. Our tool’s look and feel followed this new visual design. Moreover, we strived to make the UI feel natural on top of it.',
};

export const toStorybook = () => <Challenge {...FIXTURE} />;

toStorybook.story = {
  name: 'Challenge Story',
};
