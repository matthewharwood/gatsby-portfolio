import {list, single, linklist,collaborator} from './overview-type';
export default {
  name: 'projectOverviewSchema',
  title: 'Project Overview',
  type: 'object',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'object',
      fields: single,
    },
    {
      name: 'client',
      title: 'Client',
      type: 'object',
      fields: single,
    },
    {
      name: 'role',
      title: 'My Role',
      type: 'object',
      fields: single,
    },
    {
      name: 'when',
      title: 'When',
      type: 'object',
      fields: single,
    },
    {
      name: 'collaborators',
      title: 'Collaborators',
      type: 'object',
      // fields: collaborator, this doesn't work yet with renderer
      fields: list,
    },
    {
      name: 'technology',
      title: 'Technology',
      type: 'object',
      fields: list,
    },
    {
      name: 'resources',
      title: 'Resources',
      type: 'object',
      fields: linklist,
    },
  ],
};
