import React from 'react';
import { Headline } from '../components/headline';

const IndexPage = () => (
  <>
    <Headline
      // $backgroundColor={'green'}
      // $color={'red'}
      main={{ text: 'Nike Jordan Editor' }}
      sub={{
        text:
          'A real-time WYSIWYG editor for project owners, designers, copywriters to rapid prototype pages.',
      }}
      eyebrow={{ text: 'Web Application', textColor: 'red' }}
      projectOverview={{
        company: { data: 'AKQA', type: 'default' },
        client: { data: 'Nike Jordan', type: 'default' },
        'my role': { data: 'Developer/Designer', type: 'default' },
        when: { data: 'Feb 2014 - Mar 2014 (8 weeks)', type: 'default' },
        collaborators: {
          data: {
            items: [
              'Jimmy Soat (Creative Director)',
              'Stanley Yeung (Visual Designer)',
              'Jeffrey Qua (Developer)',
            ],
            type: 'list',
          },
        },
        technology: {
          data: {
            items: ['AngularJS', 'Firebase'],
            type: 'list',
          },
        },
        resources: {
          data: {
            items: [
              { text: 'Github', href: 'uber.com' },
              { text: 'Design Files', href: 'uber.com' },
              { text: 'Website', href: 'uber.com' },
            ],
            type: 'link',
          },
        },
      }}
    />
  </>
);

export default IndexPage;
