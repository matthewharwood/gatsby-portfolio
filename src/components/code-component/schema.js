export default {
  name: 'codeComponent',
  title: 'Code Component',
  type: 'document',
  fields: [
    {
      name: 'code',
      title: 'Code',
      type: 'text',
      required: true,
    },
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      required: false,
    },
  ],
};

