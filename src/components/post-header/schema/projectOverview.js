export default {
  name: 'projectOverviewSchema',
  title: 'Project Overview',
  type: 'object',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'company',
    },

    {
      name: 'client',
      title: 'Client',
      type: 'client',
    },
    {
      name: 'role',
      title: 'My Role',
      type: 'role',
    },
    {
      name: 'when',
      title: 'When',
      type: 'when',
    },
    {
      name: 'collaborators',
      title: 'Collaborators',
      type: 'collaborators',
    },
    {
      name: 'technology',
      title: 'Technology',
      type: 'technology',
    },
    {
      name: 'resources',
      title: 'Resources',
      type: 'resources',
    },
  ],
};
