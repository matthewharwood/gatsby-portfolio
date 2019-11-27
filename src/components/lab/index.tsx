import React, { FunctionComponent } from 'react';
import { LabCardsGrid } from './lab-cards-grid';
import { LabDataType } from './types';

const Lab: FunctionComponent<LabDataType> = ({ data }) => {
  if (!(data && data.allSanityLab)) {
    return null;
  }
  const allCards = data.allSanityLab.edges.map(edge => edge.node);
  // Todo (sangeet) Use Groupby npm install lodash-es --save
  const todoItems = allCards.filter(card => card.status === 'todo');
  const doingItems = allCards.filter(card => card.status === 'doing');
  const doneItems = allCards.filter(card => card.status === 'done');
  const structuredData = {
    todoCards: {
      heading: 'Todo',
      cards: todoItems,
    },
    doingCards: {
      heading: 'Doing',
      cards: doingItems,
    },
    doneCards: {
      heading: 'Done',
      cards: doneItems,
    },
  };
  return <LabCardsGrid data={structuredData} />;
};

export { Lab };
