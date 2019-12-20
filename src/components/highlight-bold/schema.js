export default {
  name: 'highlightBold',
  title: 'Highlight Bold',
  type: 'document',
  fields: [
    {
      name: 'full',
      title: 'Full',
      type: 'boolean',
    },
    {
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'leftCols',
      title: 'Left Colums',
      type: 'array',
      of: [
        {
          type: 'number',
        },
      ],
    },
    {
      name: 'rightCols',
      title: 'Right Colums',
      type: 'array',
      of: [
        {
          type: 'number',
        },
      ],
    },
    {
      name: 'orderLeft',
      title: 'Order Left',
      type: 'number',
    },
    {
      name: 'orderRight',
      title: 'Order Right',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'body',
      title: 'Body Text',
      type: 'string',
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
    {
      name: 'accentColor',
      title: 'Accent Color',
      type: 'string',
    },
    {
      name: 'borderBottom',
      title: 'Border Bottom',
      type: 'boolean',
    },
  ],
};
