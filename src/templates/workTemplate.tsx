import React from 'react';
import { graphql } from 'gatsby';

import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { PostPagination } from '../components/post-pagination';
import {pageRenderer} from '../services/page-renderer';

const WorkTemplate = ({ data, pageContext }: any) => {
  const flattenedData = data.sanityWork;
  return (
    <>
      <Navbar />
      {pageRenderer(flattenedData)}
      {/*<pre>{JSON.stringify(flattenedData, null, 4)}</pre>*/}
      {/* <PostPagination */}
      {/*  prevLink={{ */}
      {/*    link: pageContext.prev ? pageContext.prev.fields.slug : '', */}
      {/*    title: pageContext.prev ? pageContext.prev.frontmatter.title : '', */}
      {/*    description: pageContext.prev */}
      {/*      ? pageContext.prev.frontmatter.description */}
      {/*      : '', */}
      {/*  }} */}
      {/*  nextLink={{ */}
      {/*    link: pageContext.next ? pageContext.next.fields.slug : '', */}
      {/*    title: pageContext.next ? pageContext.next.frontmatter.title : '', */}
      {/*    description: pageContext.next */}
      {/*      ? pageContext.next.frontmatter.description */}
      {/*      : '', */}
      {/*  }} */}
      {/* /> */}
      <Footer />
    </>
  );
};

export default WorkTemplate;

// mdx(id: { eq: $id }) {
//   id
//   body
//   frontmatter {
//     title
//   }
// }

export const pageQuery = graphql`
  query WorkPageQuery($id: String) {
    sanityWork(id: { eq: $id }) {
      id
      title
      _rawContent
    }
  }
`;
