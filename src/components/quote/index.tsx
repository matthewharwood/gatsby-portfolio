import React from 'react';
import { useStyletron } from 'baseui';
import { Grid, Section, Container } from '../grid-system/';
import { Paragraph1, Paragraph4 } from 'baseui/typography';

interface Props {
  body: string;
}
export const Quote = ({ body, name, title, date }: Props) => {
  const [css, theme] = useStyletron();
  const md = theme.mq.md;
  const lg = theme.mq.lg;
  return (
    <Section>
      <Container>
        <div
          className={css({
            display: theme.display.grid,
            gridTemplateRows: '2fr 1fr',
            gridTemplateColumns: 'repeat(4, 1fr)',
            [md]: {
              gridTemplateColumns: 'repeat(6, 1fr)',
            },
            [lg]: {
              gridTemplateColumns: 'repeat(12, 1fr)',
            },
          })}
        >
          <Paragraph1
            className={css({
              fontStyle: 'italic',
              fontSize: theme.sizing.scale800,
              lineHeight: theme.sizing.scale1000,
              gridRow: '1/2',
              gridColumn: '1/-1',
              alignSelf: 'end',
              [md]: {
                gridColumn: '2/6',
              },
              [lg]: {
                gridColumn: '3/11',
              },
            })}
            color={theme.colors.primary600}
          >
            {body}
          </Paragraph1>
          <Paragraph4
            color={theme.colors.primary500}
            className={css({
              gridRow: '2/3',
              gridColumn: '-3/-1',
              justifySelf: 'end',
              textAlign: 'right',
              textTransform: 'uppercase',
              fontFamily: 'mono',
              [md]: {
                gridColumn: '4/6',
              },
              [lg]: {
                gridColumn: '3/11',
              },
            })}
          >
            {name}
            <br />
            {title}
            <br />
            {date}
          </Paragraph4>
        </div>
      </Container>
    </Section>
  );
};
