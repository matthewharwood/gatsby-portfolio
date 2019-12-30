import React, { FunctionComponent } from 'react';
import { useStyletron } from 'baseui';
import { mq } from '../styles';
import { H3 } from 'baseui/typography';
import { LabCard } from '../lab-card';
import { CardsColumnType } from './types';
import { Block } from 'baseui/block';

const CardsColumn: FunctionComponent<CardsColumnType> = ({ data }) => {
  const { heading, cards } = data;
  const [css, theme] = useStyletron();
  return (
    <Block gridColumn="span 4">
      <Block color={'primary700'} paddingLeft={[0, 0, 0, 'scale1200']}>
        <H3 color={'inherit'}>{heading}</H3>
      </Block>
      {cards.map((card, i) => (
        <LabCard data={card} key={i} />
      ))}
    </Block>
  );
};

export { CardsColumn };
