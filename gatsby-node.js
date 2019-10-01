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

// Create pages for respective markdown files
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // Queries all Mdx files with appropriate data fields
  return graphql(`
    {
      markdowns: allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
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
    result.data.markdowns.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`src/templates/${node.frontmatter.templateKey}.js`),
        context: { id: node.id },
      });
    });
  });
};
