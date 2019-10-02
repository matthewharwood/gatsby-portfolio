import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const WorkTemplate = ({ data }) => {
  return (
    <>
      <h1>Title: {data.mdx.frontmatter.title}</h1>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </>
  );
};

export default WorkTemplate;

export const pageQuery = graphql`
  query WorkPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
