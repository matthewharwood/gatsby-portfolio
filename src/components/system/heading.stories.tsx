// @flow
import React, { FunctionComponent } from 'react';

import { storiesOf } from '@storybook/react';

import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { Tag, VARIANT } from 'baseui/tag';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from './heading';

const storyModule = storiesOf('System/Heading', module);

const exampleProps = {
  marginTop: 0,
  marginBottom: 0,
};

function DefaultExample() {
  const [, theme] = useStyletron();
  const { sizing } = theme;

  return (
    <Block display="grid" gridGap="24px" padding={sizing.scale1000}>
      <Heading1 {...exampleProps}>Lorem ipsum heading 1</Heading1>
      <Heading2 {...exampleProps}>Lorem ipsum heading 2</Heading2>
      <Heading3 {...exampleProps}>Lorem ipsum heading 3</Heading3>
      <Heading4 {...exampleProps}>Lorem ipsum heading 4</Heading4>
      <Heading5 {...exampleProps}>Lorem ipsum heading 5</Heading5>
      <Heading6 {...exampleProps}>Lorem ipsum heading 6</Heading6>
    </Block>
  );
}

const StyledTag: FunctionComponent<any> = props => (
  <Tag
    closeable={false}
    variant={VARIANT.solid}
    overrides={{
      Root: {
        style: {
          marginBottom: 0,
          marginLeft: '10px',
          marginRight: '10px',
          marginTop: 0,
        },
      },
    }}
  >
    {props.children}
  </Tag>
);

function WithChildren() {
  const [, theme] = useStyletron();
  const { sizing } = theme;

  return (
    <Block display="grid" gridGap="24px" padding={sizing.scale1000}>
      <Heading1 {...exampleProps}>Lorem ipsum heading 1</Heading1>
      <Heading2 alignItems="center" display="flex" {...exampleProps}>
        Lorem ipsum heading 2<StyledTag>1-2</StyledTag>
      </Heading2>
      <Heading3 alignItems="center" display="flex" {...exampleProps}>
        Lorem ipsum heading 3<StyledTag>1-2</StyledTag>
      </Heading3>
      <Heading4 alignItems="center" display="flex" {...exampleProps}>
        Lorem ipsum heading 4<StyledTag>1-2</StyledTag>
      </Heading4>
      <Heading5 {...exampleProps}>Lorem ipsum heading 5</Heading5>
      <Heading6 {...exampleProps}>Lorem ipsum heading 6</Heading6>
    </Block>
  );
}

function WithOverrides() {
  const [, theme] = useStyletron();
  const { sizing } = theme;

  return (
    <Block display="grid" gridGap="24px" padding={sizing.scale1000}>
      <Heading1 {...exampleProps} font="font1450">
        Lorem ipsum
      </Heading1>
      <Heading2 {...exampleProps} font="font550">
        Lorem ipsum heading 2
      </Heading2>
      <Heading3 {...exampleProps} font="font450">
        Lorem ipsum heading 3
      </Heading3>
      <Heading4 {...exampleProps} font="font350">
        Lorem ipsum heading 4
      </Heading4>
      <Heading5 {...exampleProps} font="font250">
        Lorem ipsum heading 5
      </Heading5>
      <Heading6 {...exampleProps} font="font150">
        Lorem ipsum heading 6
      </Heading6>
    </Block>
  );
}

storyModule
  .add('with Default styles', () => <DefaultExample />)
  .add('with Children', () => <WithChildren />)
  .add('with Overrides', () => <WithOverrides />);
