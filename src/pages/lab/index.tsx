import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { LabDataType } from '../../components/lab/types';
import { Lab } from '../../components/lab';

const LabPage: FunctionComponent<LabDataType> = props => {
  return <Lab {...props} />;
};

export const PageQuery = graphql`
  {
    allSanityLab {
      edges {
        node {
          title
          tags
          status
          slug {
            current
          }
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid_withWebp
              }
            }
          }
          video {
            asset {
              url
            }
          }
          labCardBackgroundType
        }
      }
    }
  }
`;

export default LabPage;
