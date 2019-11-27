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

async function createWorkPages(actions, graphql) {
  const { createPage } = actions;
  const result = await graphql(`
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
  `);

  if (result.errors) throw result.errors;

  const root = {
    workTemplate: 'work/',
  };

  const workFiles = result.data.allSanityWork.edges;

  workFiles.forEach(({ node }, index) => {
    createPage({
      path: path.join(root[node.templateKey], node.slug.current),
      component: path.resolve(
        `./src/templates/${String(node.templateKey)}.tsx`
      ),
      context: {
        id: node.id,
        prev: index === 0 ? null : workFiles[index - 1].node,
        next: index === workFiles.length - 1 ? null : workFiles[index + 1].node,
      },
    });
  });
}

async function creatLabPages(actions, graphql) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityLab {
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
  `);

  if (result.errors) throw result.errors;

  const root = {
    labTemplate: 'lab/',
  };

  const labFiles = result.data.allSanityLab.edges;

  labFiles.forEach(({ node }, index) => {
    createPage({
      path: path.join(root[node.templateKey], node.slug.current),
      component: path.resolve(
        `./src/templates/${String(node.templateKey)}.tsx`
      ),
      context: {
        id: node.id,
        prev: index === 0 ? null : labFiles[index - 1].node,
        next: index === labFiles.length - 1 ? null : labFiles[index + 1].node,
      },
    });
  });
}

exports.createPages = async ({ actions, graphql }) => {
  await createWorkPages(actions, graphql);
  await creatLabPages(actions, graphql);
};
