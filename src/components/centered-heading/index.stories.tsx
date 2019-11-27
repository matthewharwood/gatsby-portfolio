import React from 'react';
import { CenteredHeading } from './';
import { Props } from './types';

export default {
  title: CenteredHeading.name,
};

const FIXTURE: Props = { heading: 'Im a header' };

export const toStorybook = () => <CenteredHeading {...FIXTURE} />;

toStorybook.story = {
  name: 'Master',
};
