import React, { FunctionComponent } from 'react';
import { useStyletron } from 'baseui';
import { mq } from '../styles';
import { H3 } from 'baseui/typography';
import { LabCard } from '../lab-card';
import { CardsColumnType } from './types';

const CardsColumn: FunctionComponent<CardsColumnType> = ({ data }) => {
  const { heading, cards } = data;
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        gridColumn: 'span 4',
        [mq.md]: {
          gridColumn: 'span 3',
        },
        [mq.lg]: {
          gridColumn: 'span 4',
        },
      })}
    >
      <div
        className={css({
          color: theme.colors.primary700,
          [mq.lg]: { paddingLeft: theme.sizing.scale1200 },
        })}
      >
        <H3 color={'inherit'}>{heading}</H3>
      </div>
      {cards.map((card, i) => (
        <LabCard data={card} key={i} />
      ))}
    </div>
  );
};

export { CardsColumn };
