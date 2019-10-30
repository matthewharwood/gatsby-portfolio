import resource from './resource';

export default {
  name: 'projectOverviewSchema',
  title: 'Project Overview',
  type: 'object',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string',
    },
    {
      name: 'myRole',
      title: 'My Role',
      type: 'string',
    },
    {
      name: 'when',
      title: 'When',
      type: 'string',
    },
    {
      name: 'collaborators',
      title: 'Collaborators',
      type: 'object',
      fields: [
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
      ]
    },
    {
      name: 'technology',
      title: 'Technology',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [{ type: 'resource' }],
    },
  ],
};
