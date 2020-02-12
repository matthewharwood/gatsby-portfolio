import React, { FunctionComponent, useState } from 'react';
import { Container, Grid, Section } from '../@design-system/block-layout';
import { Footer } from '../footer';
import { LabHeader } from './lab-header';
import { CardsColumn } from './cards-columns';
import { LabCardsGridType } from './types';
import { useStyletron } from 'baseui';
import { useMediaQuery } from '../utils/use-media-query';
import { Navigation } from '../navigation';

const LabCardsGrid: FunctionComponent<LabCardsGridType> = ({ data }) => {
  const { todoCards, doingCards, doneCards } = data;
  const [, theme] = useStyletron();
  const isLarge = useMediaQuery(theme.mediaQuery.large);
  const [active, updateActive] = useState(false);
  const toggle = () => updateActive(!active);
  const close = () => updateActive(false);
  return (
    <>
      <Navigation
        isLarge={isLarge}
        toggle={toggle}
        active={active}
        close={close}
      />
      <Section $backgroundFullBleed={true}>
        <Container $paddingLeft="none" $paddingRight="none">
          <Grid>
            <LabHeader />
            <CardsColumn data={todoCards} />
            <CardsColumn data={doingCards} />
            <CardsColumn data={doneCards} />
          </Grid>
        </Container>
      </Section>
      <Footer />
    </>
  );
};

export { LabCardsGrid };
