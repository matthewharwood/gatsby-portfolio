import React, { Component } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StatefulMenu } from 'baseui/menu';
import { useStyletron } from 'baseui';
import { Display3, Paragraph1 } from 'baseui/typography';
import Img from 'gatsby-image';

const WorkMenu = props => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const ITEMS = [
    { label: 'Item One' },
    { label: 'Item Two' },
    { label: 'Item Three', disabled: true },
    { label: 'Item Four', disabled: true },
    { label: 'Item Five' },
    { label: 'Item Six' },
    { label: 'Item Seven' },
    { label: 'Item Eight' },
    { label: 'Item Nine' },
    { label: 'Item Ten' },
    { label: 'Item Eleven' },
    { label: 'Item Twelve' },
  ];
  return (
    <StatefulMenu
      items={ITEMS}
      onItemSelect={console.log}
      overrides={{
        List: {
          style: {
            height: '100%',
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            boxShadow: 'none',
          },
        },
        Option: {
          props: {
            getItemLabel: item => item.label,
          },
        },
      }}
    />
  );
};

const Grid = props => {
  const [css] = useStyletron();
  return (
    <div
      className={css({
        display: 'grid',
        height: '100%',
        gridTemplateColumns: '40% 60%',
        gridTemplateRows: '33.3333% 66.6666%',
        gridTemplateAreas: `
          "menuTitle post"
          "menu post"`,
        position: 'relative',
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

const GridItemInner = props => {
  const [css, theme] = useStyletron();

  return (
    <div
      className={css({
        paddingLeft: theme.sizing.scale1600,
        paddingTop: theme.sizing.scale1600,
      })}
    >
      {props.children}
    </div>
  );
};

const FloatingDetails = props => {
  const [css, theme] = useStyletron();
  const { colors, sizing, positions } = theme;

  return (
    <div
      className={css({
        minHeight: sizing.scale4800,
        color: colors.white,
        padding: sizing.scale1600,
        position: positions.absolute,
        bottom: sizing.scale1600,
        left: sizing.scale0,
        right: sizing.scale1600,
        background: colors.primary700,
      })}
    >
      {props.children}
    </div>
  );
};

const Work = ({ data }) => {
  const [css] = useStyletron();
  return (
    <Grid>
      <GridItem gridArea={'menuTitle'}>
        <GridItemInner>
          <Display3>Work</Display3>
          <Paragraph1>Check out some of my work</Paragraph1>
        </GridItemInner>
      </GridItem>
      <GridItem gridArea={'menu'}>
        <GridItemInner>
          <WorkMenu />
        </GridItemInner>
      </GridItem>
      <GridItem gridArea={'post'}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <FloatingDetails>
          <Display3>Nike Jordan Editor</Display3>
        </FloatingDetails>
      </GridItem>
    </Grid>
  );
};

export default Work;
