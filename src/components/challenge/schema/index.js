export default {
  name: 'challenge',
  title: 'Challenge',
  type: 'document',
  fields: [
    {
      name: 'challengeNum',
      title: 'Challenge Number',
      type: 'number',
    },
    {
      name: 'challengeText',
      title: 'Challenge Text',
      type: 'string',
    },
    {
      name: 'solution',
      title: 'solution',
      type: 'string',
    },
    {
      name: 'takeaway',
      title: 'takeaway',
      type: 'string',
    },
    {
      name: 'solutionCards',
      title: 'Solution Cards',
      type: 'array',
      of: [
        {
          type: 'solutionCard',
        },
      ],
    },
    {
      name: 'legend',
      title: 'Legend',
      type: 'array',
      of: [
        {
          type: 'legend',
        },
      ],
    },
    {
      name: 'cardsDirection',
      title: 'cardsDirection',
      type: 'string',
      options: {
        list: [
          { title: 'default', value: '' },
          { title: 'column', value: 'column' },
        ],
      },
    },
  ],
};
