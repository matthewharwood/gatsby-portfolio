import React from 'react';
import { PostHeader } from './';

export default {
  title: 'post-header',
};

const FIXTURE = {
  eyebrow: { _type: 'label', text: 'Web application' },
  mainText: { _type: 'label', text: 'Stanley CMZ' },
  subText: {
    _type: 'label',
    text:
      'A real-time WYSIWYG editor for project owners, designers, copywriters to rapid prototype pages.',
  },
  projectOverview: {
    _type: 'projectOverviewSchema',
    client: { data: 'Nike Jordan', type: 'default' },
    collaborators: { data: { items: ['Jimmy Soat'], type: 'list' } },
    company: { data: 'AKQA', type: 'default' },
    resources: {
      data: {
        items: [
          {
            _key: '7d0a426cca2e',
            _type: 'link',
            href: 'https://www.github.com',
            text: 'Github',
          },
        ],
        type: 'link',
      },
    },
    role: { data: 'Developer/Designer', type: 'default' },
    technology: { data: { items: ['AngularJS', 'Firebase'], type: 'list' } },
    when: { data: 'Feb 2014 - Mar 2014 (8 weeks)', type: 'default' },
  },
};

export const PostHeaderStory = () => <PostHeader {...FIXTURE} />;
