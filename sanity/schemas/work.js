export default {
    name: 'work',
    title: 'Work',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
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
        },
        {
            name: 'data',
            title: 'Date',
            type: 'datetime',
        },
        {
            name: 'templateKey',
            title: 'Template Key',
            type: 'string',
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
            ],
        },
    ],
};
