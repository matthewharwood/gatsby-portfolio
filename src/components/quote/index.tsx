import React, { FunctionComponent } from 'react';
import { Grid, Section, Container } from '../@design-system/block-layout';
import { Paragraph1, Paragraph4 } from 'baseui/typography';
import { Block } from 'baseui/block';
import { Props } from './types';

export const Quote: FunctionComponent<Props> = ({
  body = 'Default Quote',
  name = 'Default Name',
  title = 'Director',
  date = 'July 2015',
}) => {
  return (
    <Section>
      <Container>
        <Grid>
          <Block
            gridColumn={['1/-1', '1/-1', '1/-1', '3/11']}
            overrides={{
              Block: {
                style: ({ $theme }) => ({
                  fontStyle: 'italic',
                  fontSize: $theme.sizing.scale800,
                  lineHeight: $theme.sizing.scale1000,
                }),
              },
            }}
          >
            <Paragraph1 color={'primary600'} font={'inherit'}>
              &ldquo;{body}&rdquo;
            </Paragraph1>
          </Block>
          <Block
            gridColumn={['1/-1']}
            overrides={{
              Block: {
                style: {
                  textAlign: 'right',
                  textTransform: 'uppercase',
                  fontFamily: 'mono',
                },
              },
            }}
          >
            <Paragraph4 color={'primary500'}>
              {name}
              <br />
              {title}
              <br />
              {date}
            </Paragraph4>
          </Block>
        </Grid>
      </Container>
    </Section>
  );
};
