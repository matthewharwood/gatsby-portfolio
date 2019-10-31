export default {
  name: "solutionCard",
  title: "Solution Card",
  type: "document",
  fields: [
    {
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
      title: "text",
      name: "text",
      type: "string",
    },
    {
      title: "accentColor",
      name: "accentColor",
      type: "string",
      options: {
        list: [
          { title: "blue", value: "blue" },
          { title: "red", value: "tomato" },
        ],
      },
    },
  ],
}