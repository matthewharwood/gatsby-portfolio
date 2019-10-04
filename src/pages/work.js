import React, { useState } from 'react';
import {graphql } from 'gatsby';
import Img from 'gatsby-image';

import { useStyletron } from 'baseui';
// import { StatefulMenu } from 'baseui/menu';
import { Navigation } from 'baseui/side-navigation';
import { Button, KIND, SIZE } from 'baseui/button';
import { Display2, Display3, Paragraph1 } from 'baseui/typography';
import ArrowRight from 'baseui/icon/arrow-right';

const WorkMenu = ({ items, currentItemId, setCurrentItemId }) => {
  const [menuItems, setMenuItems] = useState(
    items.map((i, index) => ({
      index,
      title: `${index < 10 ? '0' + index + `:   ` : index + `:   `} ${i.label}`,
      itemId: `#${index}`,
    }))
  );

  const [location, setLocation] = useState(menuItems[currentItemId].itemId);


  return (
    <Navigation
      items={menuItems}
      activeItemId={location}
      onChange={({ item }) => {
        setCurrentItemId(item.index);
        setLocation(`#${item.index}`);
      }}
      overrides={{
        navLink: {
          style: ({ $active, $theme }) => {
            return {
              borderLeftColor: '#449922',
            };
          },
        },
      }}
    ></Navigation>
  );
};

const Grid = props => {
  const [css, theme] = useStyletron();

  const lg = `@media (min-width: ${theme.breakpoints.large}px)`;
  const med = `@media (min-width: ${theme.breakpoints.medium}px)`;
  return (
    <div
      className={css({
        display: 'grid',
        position: 'relative',
        height: '100%',
        gridTemplateRows: '20% 80%',
        gridTemplateColumns: 'unset',
        gridTemplateAreas: `"menuTitle" "menu"`,

        [med]: {
          gridTemplateRows: '20% 13.333% 66.6666%',
          gridTemplateColumns: 'unset',
          gridTemplateAreas: `"post" "menuTitle" "menu"`,
        },
        [lg]: {
          gridTemplateColumns: '40% 60%',
          gridTemplateRows: '33.3333% 66.6666%',
          gridTemplateAreas: `
          "menuTitle post"
          "menu post"`,
        },
      })}
    >
      {props.children}
    </div>
  );
};

const GridItem = props => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'grid',
        position: theme.positions.relative,
        gridArea: props.gridArea,
      })}
    >
      {props.children}
    </div>
  );
};
const GridPostItem = props => {
  const [css, theme] = useStyletron();
  const lg = `@media (min-width: ${theme.breakpoints.large}px)`;
  const md = `@media (min-width: ${theme.breakpoints.medium}px)`;

  return (
    <div
      className={css({
        position: theme.positions.relative,
        display: 'none',
        [md]: {
          display: 'grid',
          gridArea: 'post',
        },
      })}
    >
      {props.children}
    </div>
  );
};

const GridItemInner = props => {
  const [css, theme] = useStyletron();
  const lg = `@media (min-width: ${theme.breakpoints.large}px)`;
  const md = `@media (min-width: ${theme.breakpoints.medium}px)`;

  return (
    <div
      className={css({
        paddingLeft: theme.sizing.scale700,
        paddingTop: theme.sizing.scale700,
        [md]: {
          paddingLeft: theme.sizing.scale700,
          paddingTop: theme.sizing.scale800,
        },
        [lg]: {
          paddingLeft: theme.sizing.scale1600,
          paddingTop: theme.sizing.scale1600,
        },
      })}
    >
      {props.children}
    </div>
  );
};

const MenuGridInner = props => {
  const [css, theme] = useStyletron();
  const lg = `@media (min-width: ${theme.breakpoints.large}px)`;
  const md = `@media (min-width: ${theme.breakpoints.medium}px)`;
  return (
    <div
      className={css({
        overflow: 'auto',
        position: 'relative',
        paddingLeft: theme.sizing.scale200,
        paddingTop: theme.sizing.scale700,
        paddingBottom: theme.sizing.scale0,
        [md]: {
          paddingLeft: theme.sizing.scale200,
          paddingTop: theme.sizing.scale1000,
        },
        [lg]: {
          paddingLeft: theme.sizing.scale1600,
        },
      })}
    >
      {props.children}
    </div>
  );
};
const MenuGridInnerShadow = () => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        position: 'fixed',
        width: '100%',
        bottom: '1px',
        zIndex: '1',
        boxShadow: '0px 0px 8px 10px rgba(255,255,255,0.4)',
      })}
    />
  );
};
const FloatingDetails = props => {
  const [css, theme] = useStyletron();
  const { colors, sizing, positions } = theme;
  const lg = `@media (min-width: ${theme.breakpoints.large}px)`;
  const md = `@media (min-width: ${theme.breakpoints.medium}px)`;

  return (
    <div
      className={css({
        display: 'none',
        [lg]: {
          display: 'block',
          minHeight: sizing.scale4800,
          color: colors.white,
          padding: sizing.scale1600,
          position: positions.absolute,
          bottom: sizing.scale1600,
          left: '-1px',
          right: sizing.scale1600,
          background: colors.primary700,
        },
      })}
    >
      {props.children}
    </div>
  );
};
const BoxShadow = () => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        position: theme.positions.absolute,
        top: theme.sizing.scale0,
        bottom: theme.sizing.scale0,
        left: theme.sizing.scale0,
        right: theme.sizing.scale0,
        boxShadow: theme.lighting.shadow500,
      })}
    />
  );
};
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

  return (
    <>
      <MenuGridInnerShadow />
      <Grid>
        <GridItem gridArea={'menuTitle'}>
          <GridItemInner>
            <Display2>Work</Display2>
            <Paragraph1>Check out some of my work</Paragraph1>
          </GridItemInner>
        </GridItem>
        <GridItem gridArea={'menu'}>
          <MenuGridInner>
            <WorkMenu items={items} currentItemId={currentItemId} setCurrentItemId={setCurrentItemId} />
          </MenuGridInner>
        </GridItem>
        <GridPostItem>
          <BoxShadow />
          <Img
            style={{ boxShadow: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.04)' }}
            // fluid={data.placeholderImage.childImageSharp.fluid}
            fluid={currentItem.image.childImageSharp.fluid}
          />

          <FloatingDetails>
            <Display3 color="primary50">{currentItem.label}</Display3>
            <Paragraph1 color="primary50">{currentItem.description}</Paragraph1>
            <Button
              $as="a"
              href="https://styletron.org"
              kind={KIND.secondary}
              size={SIZE.large}
              endEnhancer={() => <ArrowRight size={24} />}
              overrides={{
                BaseButton: {
                  style: ({ $theme }) => {
                    return {
                      backgroundColor: '#FF6347',
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
    allMdx(filter: { frontmatter: { templateKey: { eq: "workTemplate" } } }) {
      edges {
        node {
          id
          frontmatter {
            label: title
            description
            image {
              childImageSharp{
                fluid (quality:90) {
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
