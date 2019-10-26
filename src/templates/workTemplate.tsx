import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';




import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { PostPagination } from '../components/post-pagination';
import { useStyletron } from 'baseui';

const WorkTemplate = ({ data, pageContext }: any) => {
  return (
    <>
      <Navbar />
       <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <PostPagination
        prevLink={{
          link: pageContext.prev ? pageContext.prev.fields.slug : '',
          title: pageContext.prev ? pageContext.prev.frontmatter.title : '',
          description: pageContext.prev
            ? pageContext.prev.frontmatter.description
            : '',
        }}
        nextLink={{
          link: pageContext.next ? pageContext.next.fields.slug : '',
          title: pageContext.next ? pageContext.next.frontmatter.title : '',
          description: pageContext.next
            ? pageContext.next.frontmatter.description
            : '',
        }}
      />
      <Footer />
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
