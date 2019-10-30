export const single = [
  {
    name: 'data',
    title: 'data',
    type: 'string',
  },
  {
    name: 'type',
    title: 'Type',
    type: 'string',
    options: {
      list: [
        {title: 'default', value: 'default'},
        {title: 'list', value: 'list'},
        {title: 'link', value: 'link'}
      ], // <-- predefined values
    }
  }
]
export const list = [
  {
    name: 'data',
    type: 'object',
    title: 'data',
    fields: [
      {
        name: 'items',
        title: 'items',
        type: 'array',
        of: [{
          type: 'string',
        }]
      },
      {
        name: 'type',
        title: 'Type',
        type: 'string',
        options: {
          list: [
            {title: 'default', value: 'default'},
            {title: 'list', value: 'list'},
            {title: 'link', value: 'link'}
          ],
        }
      }
    ]
  }
];

export const linklist = [
  {
    name: 'data',
    type: 'object',
    title: 'data',
    fields: [
      {
        name: 'items',
        title: 'items',
        type: 'array',
        of: [{type: 'link'}]
      },
      {
        name: 'type',
        title: 'Type',
        type: 'string',
        options: {
          list: [
            {title: 'default', value: 'default'},
            {title: 'list', value: 'list'},
            {title: 'link', value: 'link'}
          ],
        }
      }
    ]
  }
];