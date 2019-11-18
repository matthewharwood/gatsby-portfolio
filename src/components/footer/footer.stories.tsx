import React from 'react';
import { Footer } from './';
// @ts-ignore

export default {
  title: 'footer',
};

const FIXTURE = {
  headline: 'Good Morning Harwood',
  subheadline: 'A creative playground by ',
  link: {
    href: 'https://uber.com',
    text: 'Matthew Harwood',
  },
};

export const toStorybook = () => <Footer {...FIXTURE} />;

toStorybook.story = {
  name: 'Footer Story',
};
