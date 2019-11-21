export default {
  name: 'lab',
  title: 'Lab',
  type: 'document',
  initialValue: () => ({
    templateKey: 'labTemplate',
  }),
  fields: [
    {
      name: 'templateKey',
      title: 'Template Key',
      type: 'string',
      required: true,
      hidden: true,
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      required: true,
    },
    {
      name: 'subline',
      title: 'Subline',
      type: 'string',
      required: false,
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
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['todo', 'doing', 'done'],
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'imageSection' },
        { type: 'centeredHeading' },
        { type: 'imageGallery' },
        { type: 'codeComponent' },
      ],
    },
  ],
};
