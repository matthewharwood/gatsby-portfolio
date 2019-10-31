import React  from 'react';
import { graphql } from 'gatsby';
import {Link} from 'gatsby';
import {join} from 'path';

const Work = ({ data: {allSanityWork: {edges}} }) => {
  const templateKeyMap = {
    'workTemplate': 'work',
    'labTemplate': 'lab',
  }
  return (
    <ul>
      {edges.map(({node}, key) => {
        return <li key={key}><Link to={join(templateKeyMap[node.templateKey], node.slug.current)}>{node.title}</Link></li>
      })}
    </ul>

  );
};

export const PageQuery = graphql`
  {
    allSanityWork {
      edges {
        node {
         id
         description
         title
         templateKey
         slug {
           current
         }
        }
      }
    }
  }
`;

export default Work;
