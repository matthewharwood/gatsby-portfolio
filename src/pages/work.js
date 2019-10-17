import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Menu, MenuGrid } from '../components/work/menu';
import { Navbar } from '../components/navbar';
import {
  Grid,
  GridItem,
  GridPostItem,
  GridItemInner,
} from '../components/work/grid';
import { FloatingDetails } from '../components/work/details';
import { BoxShadow, MenuGridInnerShadow } from '../components/work/utils';

import { useStyletron } from 'baseui';
import { Button, KIND, SIZE } from 'baseui/button';
import { Display2, Display3, Paragraph1 } from 'baseui/typography';
import ArrowRight from 'baseui/icon/arrow-right';

const InsetShadow = props => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        boxShadow: theme.lighting.overlay500,
      })}
    >
      {props.children}
    </div>
  );
};

const Work = ({ data }) => {
  const [items, setItems] = useState(
    data.allMdx.edges.map(edge => edge.node.frontmatter)
  );

  const [currentItemId, setCurrentItemId] = useState(0);
  const currentItem = items[currentItemId];

  const [, theme] = useStyletron();

  return (
    <>
      <div style={{ position: 'fixed', width: '100%', zIndex: '10000' }}>
        <Navbar />
      </div>
      <MenuGridInnerShadow />
      <Grid>
        <GridItem gridArea={'menuTitle'}></GridItem>
        <GridItem gridArea={'menu'}>
          <MenuGrid>
            <Menu
              items={items}
              currentItemId={currentItemId}
              setCurrentItemId={setCurrentItemId}
            />
          </MenuGrid>
        </GridItem>
        <GridPostItem>
          <BoxShadow />
          <Img
            style={{ boxShadow: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.04)' }}
            fluid={currentItem.image.childImageSharp.fluid}
          />

          <FloatingDetails>
            <Display3 color="primary50">{currentItem.label}</Display3>
            <Paragraph1 color="primary50">{currentItem.description}</Paragraph1>
            <Button
              $as="a"
              href="/work/work-1"
              kind={KIND.secondary}
              size={SIZE.large}
              endEnhancer={() => <ArrowRight size={24} />}
              overrides={{
                BaseButton: {
                  style: ({ $theme }) => {
                    return {
                      backgroundColor: theme.colors.accent,
                      color: $theme.colors.mono100,
                    };
                  },
                },
              }}
            >
              View Project
            </Button>
          </FloatingDetails>
        </GridPostItem>
      </Grid>
    </>
  );
};

export const PageQuery = graphql`
  {
    allMdx(
      filter: { frontmatter: { templateKey: { eq: "workTemplate" } } }
      sort: { fields: id, order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            label: title
            description
            image {
              childImageSharp {
                fluid(quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Work;
