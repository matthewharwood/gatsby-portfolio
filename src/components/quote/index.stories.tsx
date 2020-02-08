import React from 'react';
import { Quote } from './';
import { Props } from './types';

export default {
  title: 'quote',
};

const FIXTURE: Props = {
  body:
    "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind",
  name: 'Some dude',
  title: 'Director',
  date: '09/03/1942',
};

export const toStorybook = () => <Quote {...FIXTURE} />;

toStorybook.story = {
  name: 'Master',
};
