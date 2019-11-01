import React from 'react';

import { H1, H3, H4 } from 'baseui/typography';
import { useStyletron } from 'baseui';

import { Grid, Section, Container } from '../components/grid-system';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import LabCard from '../components/lab-card';

const LabHeader = () => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        gridColumn: '1/-1',
        border: '1px solid black',
      })}
    >
      <H1>Labs</H1>
      <H4>A Laboratory of Experiments</H4>
    </div>
  );
};

const TodoColumn = ({heading, cards}) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        gridColumn: 'span 4',
      })}
    >
      <H3>{heading}</H3>
      <LabCard
        data={{
          image: 'https://picsum.photos/350/700',
          tags: ['art', 'wasm'],
          title: 'Lab Card Title',
        }}
      />
      <LabCard />
      <LabCard />
    </div>
  );
};

const LabDev = () => {
  return (
    <>
      <Navbar />
      <Section>
        <Grid>
          <LabHeader />
          <TodoColumn heading={'Todo'} />
          <TodoColumn heading={'Doing'} />
          <TodoColumn heading={'Done'} />
        </Grid>
      </Section>
      <Footer />
    </>
  );
};

export default LabDev;
