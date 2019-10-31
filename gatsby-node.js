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

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions;
  return graphql(`
    {
  
    allSanityWork {
      edges {
        node {
         id
         templateKey
         slug {
           _key
           _type
           current
         }
        }
      }
    }
  }
  `).then(result => {
    const root = {
      'workTemplate': 'work/',
      'labTemplate': 'lab/'
    };
    const workFiles = result.data.allSanityWork.edges;
    workFiles.forEach(({node}, index) => {
        createPage({
          path: path.join(root[node.templateKey], node.slug.current),
          component: path.resolve(
            `./src/templates/${String(node.templateKey)}.tsx`
          ),
          context: {
            id: node.id,
            prev: index === 0 ? null : workFiles[index - 1].node,
            next:
              index === workFiles.length - 1 ? null : workFiles[index + 1].node,
          },
        })
    })
  })
}
