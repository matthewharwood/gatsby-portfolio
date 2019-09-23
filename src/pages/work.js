import React, { Component } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StatefulMenu } from 'baseui/menu';
import { useStyletron } from 'baseui';
import { Button, KIND, SIZE } from 'baseui/button';
import { Display2, Display3, Paragraph1 } from 'baseui/typography';
import ArrowRight from 'baseui/icon/arrow-right';
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
    { label: 'Item Three' },
    { label: 'Item Four' },
    { label: 'Item Five' },
    { label: 'Item Six' },
    { label: 'Item Seven' },
    { label: 'Item Eight' },
    { label: 'Item Nine' },
    { label: 'Item Ten' },
    { label: 'Item Eleven' },
    { label: 'Item Twelve' },
    { label: 'Item Ten' },
    { label: 'Item Eleven' },
    { label: 'Item Twelve' },
    { label: 'Item Ten' },
    { label: 'Item Eleven' },
    { label: 'Item Twelve' },
  ].map((i, index) => ({
    label: `${index < 10 ? '0' + index + `:   ` : index + `:   `} ${i.label}`,
  }));

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
        ListItem: {
          style: {
            fontSize: '19px',
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
  const [css, theme] = useStyletron();

  const lg = `@media (min-width: ${theme.breakpoints.large}px)`;
  const med = `@media (min-width: ${theme.breakpoints.medium}px)`;
  console.log(lg);
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
          background: colors.black,
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
            <WorkMenu />
          </MenuGridInner>
        </GridItem>
        <GridPostItem>
          <BoxShadow />
          <Img
            style={{ boxShadow: 'inset 0 0 0 1000px hsla(0, 0%, 0%, 0.04)' }}
            fluid={data.placeholderImage.childImageSharp.fluid}
          />

          <FloatingDetails>
            <Display3 color="primary50">Nike Jordan Editor</Display3>
            <Paragraph1 color="primary50">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
              sed voluptas nemo molestiae dicta provident, distinctio, ipsum id
              pariatur labore inventore non repellat. Accusamus exercitationem
              molestiae voluptatibus magni expedita vitae!
            </Paragraph1>
            <Button
              $as="a"
              href="https://styletron.org"
              kind={KIND.secondary}
              size={SIZE.large}
              endEnhancer={() => <ArrowRight size={24} />}
            >
              View Project
            </Button>
          </FloatingDetails>
        </GridPostItem>
      </Grid>
    </>
  );
};

export default Work;
