import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const ProfileTemplate = ({ data }) => {
  return (
    <>
      <h1>Title: {data.mdx.frontmatter.title}</h1>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </>
  );
};

export default ProfileTemplate;

export const pageQuery = graphql`
  query ProfilePageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
