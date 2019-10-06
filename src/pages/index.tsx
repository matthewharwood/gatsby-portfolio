import React from 'react';
import { PostHeader } from '../components/post-header';
import { Summary } from '../components/summary';
import { Process } from '../components/process';
import { Highlight } from '../components/highlight';
console.log('**'.repeat(100), Highlight);
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
      eyebrow={'00'}
      title={'Summary'}
      body={
        'The agency AKQA and their client Nike Jordan worked together to complete dozens of champaign webpages. Nike ran the majority of the creative process with their in-house copywriters, photographers, and creative directors. AKQA was the production muscle, bring together all the creative assets into a www.nike.com hosted webpage. Both Nike and AKQA did great work together; however, AKQA’s goal was to have more creative ownership. Unfortunatly for AKQA this ownership was seemingly impossible. The process between AKQA and Nike was fragemented, we were given hard deadlines, short production times, and low budgets. All of which, created a bottleneck that essentially blocked any progress towards more creative ownership. We had a mission to fix this fragemented process by bridging the the communication gap between Client Nike and Agency AKQA.'
      }
      $borderBottom={true}
    />
    <Process />
    <Highlight
      eyebrow={'01'}
      title={'Getting Started'}
      leftCols={4}
      rightCols={8}
      orderLeft={0}
      orderRight={1}
      src={
        'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
      }
      body={
        'Stanley Yeung, a former AKQA designer assigned to Nike Jordan was leaving the company.  Stanley managed the production design work for webpages across Nike Jordan.  Over lunch, Stanley’s creative director jokingly said, “With Stanley leaving, I wish we could create a robot that could continue all his production design work.” We knew we couldn’t make a robot but we saw a potential design challenge.'
      }
    />
    <Highlight
      eyebrow={'02'}
      title={'Identifing Pain Points.'}
      leftCols={8}
      rightCols={4}
      orderLeft={1}
      orderRight={0}
      src={
        'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
      }
      body={`Our design prompt was but a utterance over lunch about replacing a leaving employee with a robot.  We were unsure of what we were out to solve. Regardless, we put on our designers hats and went to best resource we knew at the time IDEO’s Method Cards. We better shaped our problem by journey mapping the process between AKQA and Nike 2014’s March Madness Campaign. Our journey map reveal that the process had many pain points:

        - Launches were often tied to an event and therefore deadlines were non-negotiable.
        - Creative handoffs often bleed into execution timelines.
        - Expensive production cost in both design and technology departements.
        - Physical distance between AKQA and Nike caused long feedback turn arounds.
        - AKQA Designers used Photoshop which didn’t offer a good solution for Responsive design.
        - Nike’s CMS CQ5 was slow and required a certified trained Authorer to use it.

         These pain points were used to help framed the product requirements.

        `}
    />
    {/* Update this to Highlight Bold BLock */}
    <Highlight
      eyebrow={'03'}
      title={'Proposed Solution'}
      leftCols={4}
      rightCols={8}
      orderLeft={0}
      orderRight={1}
      src={
        'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
      }
      body={
        'Create a design and authoring tool, that enables, en masse, inhouse or remote Nike teams to collaborate and to rapidly iterate web pages for nike.com.
        '
      }
    />

    <Summary
      eyebrow={'04'}
      title={'Design Execution'}
      body={
        'We had to move quick, we went from a list of product requirements to paper prototype with in the first day.  We based most of our interaction design on the precidence of teams’ tooling e.g. Photoshop and CQ5. Next, we gathered all of the creative assets, e.g. fonts, color pallets, icongraphy, etc, in preperation of developing a MVP.'
      }
      $borderBottom={true}
    />
  </>
);

export default IndexPage;
