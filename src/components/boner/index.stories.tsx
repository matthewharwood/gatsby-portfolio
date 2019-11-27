import React from 'react';
import { Boner } from './';
import { Props } from './types';

export default {
  title: 'Boner',
};

const FIXTURE: Props = {};

export const toStorybook = () => <Boner {...FIXTURE} />;

toStorybook.story = {
  name: 'Master',
};
