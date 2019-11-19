export default {
  name: 'imageGallery',
  title: 'Image gallery',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'imageAsset' }],
    },
  ],
};
