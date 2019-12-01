export default {
  name: 'process',
  title: 'Process',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          title: 'Step',
          type: 'step',
        },e
      ],
    },
  ],
};
