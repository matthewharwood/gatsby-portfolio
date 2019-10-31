export default {
    name: 'highlight',
    title: 'Highlight',
    type: 'document',
    fields: [
        {
            name: 'eyebrow',
            title: 'Eyebrow',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
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
            title: "Left Type",
            type: "string",
        },
        {
            name: 'orderRight',
            title: "Order Right",
            type: "number",
        },
        {
            name: 'rightType',
            title: "Right Type",
            type: "string",
        },
        {
            name: 'body',
            title: "Body Text",
            type: "text",
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
