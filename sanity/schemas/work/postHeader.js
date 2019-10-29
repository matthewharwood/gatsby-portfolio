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
      title: "Project Overiew",
      type: 'projectOverviewSchema',
    }
  ],
};
