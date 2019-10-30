export default {
  name: 'label',
  title: 'Label',
  type: 'document',
  initialValues: {
    color: 'inherit'
  },
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string'
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string'
    },
  ]
};