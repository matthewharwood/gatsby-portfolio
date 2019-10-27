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
            title: "Order Left",
            type: "number",
        },
        {
            name: 'leftType',
            title: "Left TYpe",
            type: "string",
        },
        {
            name: 'orderRight',
            title: "Order Right",
            type: "number",
        },
        {
            name: 'rightType',
            title: "Right TYpe",
            type: "string",
        },
        {
            name: 'src',
            title: "Image Source",
            type: "url",
        },
        {
            name: 'body',
            title: "Body Text",
            type: "string",
        },
        {
            name: 'backgroundColor',
            title: "Background Color",
            type: "string",
        },
        {
            name: 'color',
            title: "Color",
            type: "string",
        },
        {
            name: 'accentColor',
            title: "Accent Color",
            type: "string",
        },
        {
            name: 'borderBottom',
            title: "Border Bottom",
            type: "boolean",
        },
    ],
};

