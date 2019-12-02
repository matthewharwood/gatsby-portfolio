import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import { useStyletron } from 'baseui';
import { Label1, Display2, Paragraph1 } from 'baseui/typography';

import { Section, Container, Grid, GridItem } from '../@design-system/block-layout';
import { mq } from '../styles';
import { Props } from './types';

export const PostPagination: FunctionComponent<Props> = ({
  prevLink,
  nextLink,
}: any) => {
  const [css, theme] = useStyletron();
  const backgroundColor = theme.colors.primary700;

  const md = mq.md;
  const lg = mq.lg;

  return (
    <Section $backgroundColor={backgroundColor}>
      <Container $backgroundTransparent>
        <Grid>
          <GridItem $gridColumn={['span 6']}>
            <Link
              to={prevLink.link}
              className={css({
                color: theme.colors.mono100,
                textDecoration: 'none',
              })}
            >
              <Label1
                color={'inherit'}
                $style={{
                  textTransform: 'uppercase',
                  letterSpacing: theme.sizing.scale0,
                  [md]: { marginBottom: theme.sizing.scale600 },
                }}
              >
                Previous Project
              </Label1>
              <Display2
                color="inherit"
                $style={{
                  [md]: {
                    marginTop: theme.sizing.scale600,
                    marginBottom: theme.sizing.scale600,
                  },
                  [lg]: {
                    marginTop: theme.sizing.scale900,
                    marginBottom: theme.sizing.scale600,
                  },
                }}
              >
                {prevLink.title}
              </Display2>
              <Paragraph1 color="inherit">{prevLink.description}</Paragraph1>
            </Link>
          </GridItem>
          <GridItem $gridColumn={['span 6']}>
            <Link
              to={nextLink.link}
              className={css({
                color: theme.colors.mono100,
                textDecoration: 'none',
              })}
            >
              <Label1
                color={'inherit'}
                $style={{
                  textTransform: 'uppercase',
                  letterSpacing: theme.sizing.scale0,
                  [md]: { marginBottom: theme.sizing.scale600 },
                }}
              >
                Next Project
              </Label1>
              <Display2
                color="inherit"
                $style={{
                  [md]: {
                    marginTop: theme.sizing.scale600,
                    marginBottom: theme.sizing.scale600,
                  },
                  [lg]: {
                    marginTop: theme.sizing.scale900,
                    marginBottom: theme.sizing.scale600,
                  },
                }}
              >
                {nextLink.title}
              </Display2>
              <Paragraph1 color="inherit">{prevLink.description}</Paragraph1>
            </Link>
          </GridItem>
        </Grid>
      </Container>
    </Section>
  );
};
