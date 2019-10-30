/**
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
 */

export const collaborators = {
  name: 'collaborators',
  title: 'Collaborators',
  type: 'document',
  fields: [
    {
      name: 'data',
      title: 'Data',
      type: 'object',
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
    },
  ]
};