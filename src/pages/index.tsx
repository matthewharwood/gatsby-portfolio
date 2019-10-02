import React from 'react';
import { PostHeader } from '../components/post-header';
import { Summary } from '../components/summary';

const IndexPage = () => (
  <>
    <PostHeader
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
    <Summary
      eyebrow={'01'}
      title={'Summary'}
      body={
        'The agency AKQA and their client Nike Jordan worked together to complete dozens of champaign webpages. Nike ran the majority of the creative process with their in-house copywriters, photographers, and creative directors. AKQA was the production muscle, bring together all the creative assets into a www.nike.com hosted webpage. Both Nike and AKQA did great work together; however, AKQA’s goal was to have more creative ownership. Unfortunatly for AKQA this ownership was seemingly impossible. The process between AKQA and Nike was fragemented, we were given hard deadlines, short production times, and low budgets. All of which, created a bottleneck that essentially blocked any progress towards more creative ownership. We had a mission to fix this fragemented process by bridging the the communication gap between Client Nike and Agency AKQA.'
      }
    />
  </>
);

export default IndexPage;
