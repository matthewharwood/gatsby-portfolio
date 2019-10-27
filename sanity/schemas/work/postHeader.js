export default {
    name: 'postHeader',
    title: 'Post Header',
    type: 'document',
    fields: [
        {
            name: 'mainText',
            title: 'Main Text',
            type: 'string',
        },
        {
            name: 'subText',
            title: 'Sub Text',
            type: 'string',
        },
        {
            name: 'eyebrow',
            title: 'Eyebrow Text',
            type: 'string',
        },
        {
            name: 'projectOverview',
            title: 'Project Overview',
            type: 'object',
            fields: [
                {
                    name: 'company',
                    title: 'Company',
                    type: 'string',
                },
                {
                    name: 'client',
                    title: 'Client',
                    type: 'string',
                },
                {
                    name: 'myRole',
                    title: 'My Role',
                    type: 'string',
                },
                {
                    name: 'when',
                    title: 'When',
                    type: 'string',
                },
                {
                    name: 'collaborators',
                    title: 'Collaborators',
                    type: 'array',
                    of: [{ type: 'string' }],
                },
                {
                    name: 'technology',
                    title: 'Technology',
                    type: 'array',
                    of: [{ type: 'string' }],
                },
                {
                    name: 'resources',
                    title: 'Resources',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            fields: [
                                {
                                    name: "text",
                                    title: 'text',
                                    type: "string",
                                },
                                {
                                    name: "href",
                                    title: 'Href',
                                    type: "url",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
