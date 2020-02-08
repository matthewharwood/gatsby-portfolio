import React, { FunctionComponent } from 'react';
import {
  Display2,
  Label2,
  Label1,
  Paragraph4,
  Paragraph1,
} from 'baseui/typography';
import { StyledLink } from 'baseui/link';
import { Section, Container, Grid } from '../@design-system/block-layout/';
import { Block } from 'baseui/block';
import { PostHeaderType, TopElementType } from './types';

const TopElement: FunctionComponent<TopElementType> = ({
  $borderColor,
  children,
}) => {
  return (
    <Block
      gridColumn="1/-1"
      overrides={{
        Block: {
          style: ({ $theme }) => ({
            borderBottom: `1px solid ${$theme.colors[$borderColor]}`,
          }),
        },
      }}
    >
      {children}
    </Block>
  );
};

const ListItem: FunctionComponent = ({ children }) => {
  return (
    <Block gridColumn={'span 4'}>{children}</Block>
  );
};

const PostHeader: FunctionComponent<PostHeaderType> = ({
  eyebrow,
  mainText,
  subText,
  projectOverview,
  $backgroundColor,
  $color,
}) => {
  const backgroundColor = $backgroundColor || 'primary700';
  const color = $color || 'primary100';
  const Layout = (data: any) => {
    if (!data) {
      return data;
    }
    switch (data.type) {
      case 'link':
        return data.items.map((d: any, key: any) => (
          <span key={key}>
            <StyledLink href={d.href}>{d.text}</StyledLink>
            <br />
          </span>
        ));
      case 'list':
        return data.items.map((d: any, key: any) => (
          <span key={key}>
            {d}
            <br />
          </span>
        ));
      default:
        return data;
    }
  };

  return (
    <Section $backgroundColor={backgroundColor} $backgroundFullBleed={true}>
      <Container
        $backgroundColor={backgroundColor}
        $textColor={color}
        $paddingBottom="none"
      >
        <Grid>
          <TopElement $borderColor={color}>
            <Label1 color={'inheirt'}>{eyebrow && eyebrow.text}</Label1>
            <Display2 color={'inheirt'}>{mainText && mainText.text}</Display2>
            <Paragraph1 color={'inheirt'}>{subText && subText.text}</Paragraph1>
          </TopElement>
        </Grid>
        <Grid $marginTop="half">
          {projectOverview &&
            Object.entries(projectOverview)
              .filter(([key]) => key !== '_type')
              .map(([key, { data }]: any, k: any) => {
                return (
                  <ListItem key={k}>
                    <Label2
                      color={'inherit'}
                      $style={{ textTransform: 'capitalize' }}
                    >
                      {key}
                    </Label2>
                    <Paragraph4 color={'inherit'}>{Layout(data)}</Paragraph4>
                  </ListItem>
                );
              })}
        </Grid>
      </Container>
    </Section>
  );
};

export { PostHeader };
