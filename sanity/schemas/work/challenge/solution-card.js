export default {
  name: "solutionCard",
  title: "Solution Card",
  type: "document",
  fields: [{
    title: "heading",
    name: "heading",
    type: "string",
  },
    {
      title: "subheading",
      name: "subheading",
      type: "string",
    },
    {
      title: "accentColor",
      name: "accentColor",
      type: "string",
      options: {
        list: [
          { title: "default", value: "blue" },
        ],
      },
    }],
}