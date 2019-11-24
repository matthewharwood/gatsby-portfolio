import React from 'react';
import { Process } from './';
import { Props } from './types';

export default {
  title: 'Process',
};

const FIXTURE: Props = {
  headline: 'Process',
  steps: [
    { title: 'Getting started' },
    { title: 'Identify painpoints' },
    { title: 'Proposed Solution' },
    { title: 'Execution - Design' },
    { title: 'Execution - Development' },
    { title: 'Test / Measure / Iterate' },
    { title: 'Pitch' },
    { title: 'Result' },
    { title: 'Retrospective' },
  ],
};

export const toStorybook = () => <Process {...FIXTURE} />;

toStorybook.story = {
  name: 'Master',
};
