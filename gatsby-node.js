const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // On each Mdx node creation, add a slug to the node fields
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value: value,
    });
  }
};


exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: require.resolve('@babel/plugin-proposal-optional-chaining'),
  })
}

// Create pages for respective markdown files
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // Queries all Mdx files with appropriate data fields
  return graphql(`
    {
      workPages: allMdx(
        filter: { frontmatter: { templateKey: { eq: "workTemplate" } } }
        sort: { fields: frontmatter___date }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              title
              description
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    // Create pages for the markdown files by using the data queried earlier
    const workFiles = result.data.workPages.edges;
    workFiles.forEach(({ node }, index) => {
      console.log(index, node.fields.slug);
      createPage({
        path: node.fields.slug,
        component: path.resolve(
          `./src/templates/${String(node.frontmatter.templateKey)}.tsx`
        ),
        context: {
          id: node.id,
          prev: index === 0 ? null : workFiles[index - 1].node,
          next:
            index === workFiles.length - 1 ? null : workFiles[index + 1].node,
        },
      });
    });
  });
};
