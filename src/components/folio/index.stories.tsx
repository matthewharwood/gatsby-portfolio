import React from 'react';
import { Folio } from './';
export default {
  title: 'Folio',
};

const FIXTURE = {
  headline: 'Good Morning Harwood',
  subheadline: 'A creative playground by ',
  link: {
    href: 'https://uber.com',
    text: 'Matthew Harwood',
  },
};

export const toStorybook = () => <Folio {...FIXTURE} />;

toStorybook.story = {
  name: 'Folio Story',
};
