export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  initialValue: () => ({
    title: 'Hello world',
  }),
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule =>
        Rule.required()
          .min(3)
          .max(80),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'path',
      title: 'Path',
      type: 'string',
      validation: Rule =>
        Rule.required()
          .min(3)
          .max(80),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'templateKey',
      title: 'Template Key',
      type: 'string',
      validation: Rule =>
        Rule.required()
          .min(3)
          .max(80),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'postHeader' },
        { type: 'process' },
        { type: 'summary' },
        { type: 'highlight' },
        { type: 'highlightBold' },
        { type: 'quote' },
        { type: 'video' },
        { type: 'challenge' },
      ],
    },
  ],
};
