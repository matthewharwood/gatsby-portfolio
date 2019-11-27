import React from 'react';
import { CodeComponent } from './';
import { Props } from './types';

export default {
  title: CodeComponent.name,
};

const FIXTURE: Props = {
  code: '1234',
};

export const toStorybook = () => <CodeComponent {...FIXTURE} />;

toStorybook.story = {
  name: 'Challenge Story',
};
