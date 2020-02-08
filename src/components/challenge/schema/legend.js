export default {
  name: 'legend',
  title: 'legend',
  type: 'document',
  fields: [
    { title: 'name', type: 'string', name: 'name' },
    {
      title: 'color',
      type: 'string',
      name: 'color',
      options: {
        list: [
          { title: 'blue', value: 'blue' },
          { title: 'red', value: 'tomato' },
        ],
      },
    },
  ],
};
