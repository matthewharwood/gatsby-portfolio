import React from 'react';
import { Headline } from '../components/headline';
import { useStyletron } from 'baseui';

import { Section, Container, Grid } from '../components/grid-system';
const Element = ({ $cols = ['auto'] }) => {
  const [css, theme] = useStyletron();
};

const IndexPage = () => (
  <Section>
    <Container>
      <Headline
        main={{ text: 'Nike Jordan Editor' }}
        sub={{
          text:
            'A real-time WYSIWYG editor for project owners, designers, copywriters to rapid prototype pages.',
        }}
        eyebrow={{ text: 'Web Application', textColor: 'red' }}
      />
    </Container>
  </Section>
);

export default IndexPage;
