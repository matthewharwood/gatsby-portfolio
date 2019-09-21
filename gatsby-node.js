const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value: value,
    })
  }
}

// Create pages for docs
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const workTemplate = path.resolve("src/templates/workTemplate.js")
  const labTemplate = path.resolve("src/templates/labTemplate.js")
  const profileTemplate = path.resolve("src/templates/profileTemplate.js")

  // Individual doc and blog pages
  // All in one go
  return graphql(`
    {
      work: allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
      lab: allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
      profile: allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }

    // Create work pages
    result.data.work.edges.forEach(({ node }) => {
      createPage({
        path: `/work${node.fields.slug}`,
        component: workTemplate,
        context: { id: node.id, slug: node.fields.slug },
      })
    })

    // Create lab pages
    result.data.lab.edges.forEach(({ node }) => {
      createPage({
        path: `/lab${node.fields.slug}`,
        component: labTemplate,
        context: { id: node.id, slug: node.fields.slug },
      })
    })

    // Create profile pages
    result.data.lab.edges.forEach(({ node }) => {
      createPage({
        path: `/profile${node.fields.slug}`,
        component: profileTemplate,
        context: { id: node.id, slug: node.fields.slug },
      })
    })
  })
}
