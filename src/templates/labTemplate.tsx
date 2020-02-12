import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { Footer } from '../components/footer';
import { H1, Label1 } from 'baseui/typography';
import { Section } from '../components/@design-system/block-layout';
import { pageRenderer } from '../services/page-renderer';

import { PropTypes } from './labTemplate.types';

const LabTemplate: FunctionComponent<PropTypes> = ({ data }) => {
  const flattenedData = data.sanityLab;

  return (
    <>
      <Section>
        <PageHeader
          headline={flattenedData.title}
          subline={flattenedData.subline}
        />
        {pageRenderer(flattenedData)}
      </Section>
      <Footer />
    </>
  );
};

const PageHeader: FunctionComponent<{ headline: string; subline: string }> = ({
  headline,
  subline,
}) => {
  return (
    <>
      <H1 marginBottom={0}>{headline}</H1>
      <Label1 marginTop={0}>{subline}</Label1>
    </>
  );
};

export const PageQuery = graphql`
  query LabPageQuery($id: String) {
    sanityLab(id: { eq: $id }) {
      id
      title
      subline
      _rawContent(resolveReferences: { maxDepth: 10 })
    }
  }
`;

export default LabTemplate;
