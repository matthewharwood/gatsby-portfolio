export default {
  name: 'postHeader',
  title: 'Post Header',
  type: 'document',
  initialValue: () => ({
    mainText: 'Hello Main Text'
  }),
  fields: [
    {
      name: 'mainText',
      title: 'Main Text',
      type: 'label',
    },
    {
      name: 'subText',
      title: 'Sub Text',
      type: 'label',
    },
    {
      name: 'eyebrow',
      title: 'Eyebrow Text',
      type: 'label',
    },
    {
      name: 'projectOverview',
      title: "Project Overiew",
      type: 'projectOverviewSchema',
    }
  ],
};
