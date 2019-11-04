import React, { useState } from 'react';
import { graphql } from 'gatsby';

import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';
import { pageRenderer } from '../services/page-renderer';
import useScroll from '../components/utils/use-scroll';
import { useSpring, animated } from 'react-spring';

const WorkTemplate = ({ data }: any) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1000,
  });
  const flattenedData = data.sanityWork;
  const scrolled = useScroll();

  return (
    <animated.div style={props}>
      <Navbar show={scrolled} />
      {pageRenderer(flattenedData)}
      <Footer />
    </animated.div>
  );
};

export default WorkTemplate;

export const pageQuery = graphql`
  query WorkPageQuery($id: String) {
    sanityWork(id: { eq: $id }) {
      id
      title
      _rawContent(resolveReferences: { maxDepth: 10 })
    }
  }
`;

/**
 * import { PostPagination } from '../components/post-pagination';
 <pre>{JSON.stringify(flattenedData, null, 4)}</pre>
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
 */
