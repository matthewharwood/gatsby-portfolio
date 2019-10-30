export default {
  name: 'label',
  title: 'Label',
  type: 'document',
  initialValue: () => ({
    color: 'inherit'
  }),
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string'
    },
    // {
    //   name: 'color',
    //   title: 'Color',
    //   type: 'string'
    // },
  ]
};