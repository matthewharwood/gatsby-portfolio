import React, { Component } from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

class WorkTemplate extends Component {
  state = {}
  render() {
    console.log(this.props.data)
    return (
      <div>
        <h1>Work Template</h1>
        <h1>{this.props.data.mdx.frontmatter.title}</h1>
        <MDXRenderer>{this.props.data.mdx.body}</MDXRenderer>
      </div>
    )
  }
}

export default WorkTemplate

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
