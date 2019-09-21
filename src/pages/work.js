import React, { Component } from "react"
import { StatefulMenu } from 'baseui/menu';
import { useStyletron } from 'styletron-react';
import { Display3, Paragraph1 } from 'baseui/typography';

const WorkMenu = (props) => {
  const ITEMS = [
    {label: 'Item One'},
    {label: 'Item Two'},
    {label: 'Item Three', disabled: true},
    {label: 'Item Four', disabled: true},
    {label: 'Item Five'},
    {label: 'Item Six'},
    {label: 'Item Seven'},
    {label: 'Item Eight'},
    {label: 'Item Nine'},
    {label: 'Item Ten'},
    {label: 'Item Eleven'},
    {label: 'Item Twelve'},
  ];
  return (
    <StatefulMenu
        items={ITEMS}
        onItemSelect={console.log}
        overrides={{
          List: {
            style: {
              height: '100vh',
            },
          },
          Option: {
            props: {
              getItemLabel: item => item.label,
            },
          },
    }} />
  )
}

const Grid = (props) => {
  const [css] = useStyletron();
  return (
    <div className={css(
      {
        display: 'grid',
        gridTemplateColumns: '40% 60%',
        gridTemplateRows: '33.3333% 66.6666%',
        gridTemplateAreas: `
          "menuTitle post"
          "menu post"`,
      })}>{props.children}</div>
  );
};
const GridItem = (props) => {
  const [css] = useStyletron();
  return (
    <div className={(css({ display: 'grid',  gridArea: props.gridArea}))}>{props.children}</div>
  )
}

const Work = () => {
  const [css] = useStyletron();
  return (
    <Grid>
      <GridItem gridArea={"menuTitle"}>
        <div>
          <Display3>Work</Display3>
          <Paragraph1>Check out some of my work</Paragraph1>
        </div>
      </GridItem>
      <GridItem gridArea={"menu"}>
        <WorkMenu />
      </GridItem>
      <GridItem gridArea={"post"}>
        post
      </GridItem>
    </Grid>
  )
}

export default Work
