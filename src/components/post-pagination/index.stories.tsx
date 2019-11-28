import React from 'react';
import { PostPagination } from './';

export default {
  title: 'Post Pagination',
};

const FIXTURES = {
  prevLink: {
    title: 'PREVIOUS LINK',
    description: 'PREVIOUS DESC',
  },
  nextLink: {
    title: 'NEXT LINK',
    description: 'NEXT DESC',
  },
};

export const toStorybook = () => <PostPagination {...FIXTURES} />;

toStorybook.story = {
  name: 'Master',
};
