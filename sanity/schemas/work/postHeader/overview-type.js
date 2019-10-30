/**
 company: { data: 'AKQA', type: 'default' },
 client: { data: 'Nike Jordan', type: 'default' },
 'my role': { data: 'Developer/Designer', type: 'default' },
 when: { data: 'Feb 2014 - Mar 2014 (8 weeks)', type: 'default' },

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
 */

export const single = [
  {
    name: 'data',
    title: 'data',
    type: 'string',
  },
  {
    name: 'type',
    title: 'Type',
    type: 'string',
  }
]
export const list = [
  {
    name: 'data',
    type: 'object',
    title: 'data',
    fields: [
      {
        name: 'items',
        title: 'items',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'type',
        title: 'Type',
        type: 'string',
      }
    ]
  }
];

export const linklist = [
  {
    name: 'data',
    type: 'object',
    title: 'data',
    fields: [
      {
        name: 'items',
        title: 'items',
        type: 'array',
        of: [{type: 'link'}]
      },
      {
        name: 'type',
        title: 'Type',
        type: 'string',
      }
    ]
  }
];