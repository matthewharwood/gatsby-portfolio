import React from 'react';
import { Summary } from './';

export default {
  title: 'summary',
};

const FIXTURE = {
  eyebrow: '01',
  title: 'Test Titie',
  body:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, eveniet.',
  $accentColor: 'tomato',
  $backgroundColor: '#EEE',
  $borderBottom: true,
  $color: '#999',
};

export const SummaryStory = () => <Summary {...FIXTURE} />;
