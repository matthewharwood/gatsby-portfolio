import React from 'react';
import { PostHeader } from '../components/post-header';
import { Summary } from '../components/summary';
import { Process } from '../components/process';
import { Challenge } from '../components/challenge';

import { Highlight } from '../components/highlight';
import { PostPagination } from '../components/post-pagination';
import { useStyletron } from 'baseui';

const IndexPage = () => {
  const [css, theme] = useStyletron();
  return (
    <>
      <PostHeader
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
          'Create a design and authoring tool, that enables, en masse, inhouse or remote Nike teams to collaborate and to rapidly iterate web pages for nike.com.'
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

      <Challenge
        challengeNum={ '1' }
        challengeText={ 'How to synchronize user interaction across many applications' }
        solution={ 'Real time interactively is a hard problem, so we relied proven libraries to manage it for use.' }
        takeaway={ 'When doing realtime data on every change you need to make sure you’re doing change detection and sending over the only data that has changed.  We made a critical mistake in not doing proper change detection. Our app started to suffer when templates had large images because we were sending base64 image strings on every change to the document.' }
        $cardsDirection={'column'}
        solutionCards={[
          {
            heading: '1. adding images',
            subheading: 'drag and drop',
            $accentColor: theme.colors.accent300,
          },
          {
            heading: '2. load images',
            subheading: 'base64 to <canvas>',
            $accentColor: theme.colors.accent300,
          },
          {
            heading: '3. transform images',
            subheading: 'jpg to base64',
            $accentColor: theme.colors.accent300,
          },
          {
            heading: '4.transform images',
            subheading: 'base64 to jpg',
            $accentColor: theme.colors.accent,
          },
          {
            heading: '5. save images',
            subheading: 'jpg to base 64',
            $accentColor: theme.colors.accent,
          },
          {
            heading: '6. download images',
            subheading: 'zip all images on a page',
            $accentColor: theme.colors.accent,
          },
        ]}
        legend={[
          { name: 'add', color: theme.colors.accent300 },
          { name: 'extract', color: theme.colors.accent },
        ]}
      />

      <Challenge
        challengeNum={ '2' }
        challengeText={ 'How to synchronize user interaction across many applications' }
        solution={ 'Real time interactively is a hard problem, so we relied proven libraries to manage it for use.' }
        takeaway={ 'When doing realtime data on every change you need to make sure you’re doing change detection and sending over the only data that has changed.  We made a critical mistake in not doing proper change detection. Our app started to suffer when templates had large images because we were sending base64 image strings on every change to the document.' }
        solutionCards={[
          {
            heading: 'angularjs',
            subheading: 'frontend framework',
            text:
              'At the time, AngularJS is the most preferred framework, its component architecture made it easy to structure our web apps. AngularJS’s template language allow us to effortlessly impromptu design, develop, and refactor.',
          },
          {
            heading: 'firebase',
            subheading: 'realtime database',
            text:
              'Firebase offered a extremely fast and flexible realtime noSQL database that we used to store all the text, images and layout data of our application. Any update to our page would have a real time update to the database.',
          },
        ]}
      />

      <Challenge
        challengeNum={ '3' }
        challengeText={ 'We didn’t have time or permission to integrate a proper authorization and authentication story; however, we needed an application that private and easily shareable.' }
        solution={ 'Using Node-WebKit JS we were able to make web application a run on a native operating system. Our application was only accessible if you had the latest executable and users could easily share the executable.' }
        takeaway={ 'Node-Webkit enables a new way of writing applications with all Web technologies. However, as of writing this article the library is a bit dated, if interested in writing native operating system level web apps I would suggest using Electron.  Moreover, if you want to write native mobile apps in the same workflow I would suggest Ionic or React Native.' }
        solutionCards={[
          {
            heading: 'node-webkit js',
            subheading: 'native app js framework',
            text:
              'By wrapping our client side application inside Node-webkitJS, we were able to call all Node.js modules directly from DOM and export a binary for OSX and Windows operating systems.',
          },
        ]}
      />

      <Highlight
        eyebrow={'06'}
        title={'Presentation'}
        leftCols={5}
        rightCols={7}
        orderLeft={0}
        orderRight={1}
        body={
          'After completing this project we had the great oppertunity to do a presentation infront of the entire AKQA San Francisco office.  Jeffery Qua and myself stood in an room of 450 sets of eyes and ears that watched and listened to what we had made.'
        }
        $backgroundColor={theme.colors.mono100}
      />

      <Highlight
        eyebrow={'07'}
        title={'Test / Measure / Iterate'}
        leftCols={7}
        rightCols={5}
        orderLeft={1}
        orderRight={0}
        body={
          'We took an agile approach to the production of the Nike Jordan CMS.  Meaning we broke our eight week project into four x two week sprints.  Inside each sprint we would design, develop and test a feature with the AKQA designers.  Our agile approch created a feedback loop that yielded much of the insight needed to fail fast.  We believe this is what allowed us to make such a functional and polished project in such a short amount of time.'
        }
        $backgroundColor={theme.colors.mono100}
      />

      <Highlight
        eyebrow={'08'}
        title={'Result'}
        leftCols={10}
        rightCols={2}
        orderLeft={0}
        orderRight={1}
        body={
          'From lunch room small talk about robots and leaving empolyees to a functional real-time WYSIWYG editor. We set out to make a tool that helped reduce the friction between AKQA and NIke, with hopes that AKQA could get more creative ownership with Nike Jordan.  In the end, we made a product that did just that.'
        }
      />

      <Highlight
        eyebrow={'09'}
        title={'Retrospective'}
        leftCols={6}
        rightCols={6}
        orderLeft={1}
        orderRight={0}
        src={'https://via.placeholder.com/400'}
        body={
          'This project was a great kickstart to my career. As an intern, I was able to experience the end to end process between agency and Client; between Creative and Technlogy. This project built the foundation of a Process Model, that to this day, I still use.'
        }
        $backgroundColor={theme.colors.mono100}
      />

      <PostPagination
        title={'Pathfinder'}
        description={
          'A real-time WYSIWYG editor for project owners, designers, copywriters to rapid prototype pages.'
        }
      />
    </>
  );
};

export default IndexPage;
