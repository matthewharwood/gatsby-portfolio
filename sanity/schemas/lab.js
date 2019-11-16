export default {
  name: 'lab',
  title: 'Lab',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: "Title",
      type: 'string',
      required: true,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }]
    },
  ]
}

