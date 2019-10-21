import React from 'react';
import { useStyletron } from 'baseui';
import { Grid, Section, Container } from '../grid-system/';
import { Paragraph1, Paragraph4 } from 'baseui/typography';
import { display, mq } from '../styles';

interface Props {
  body?: string;
  name?: string;
  title?: string;
  date?: string;
}
export const Quote = ({
  body = 'Default Quote',
  name = 'Default Name',
  title = 'Director',
  date = 'July 2015',
}: Props) => {
  const [css, theme] = useStyletron();
  const md = mq.md;
  const lg = mq.lg;
  return (
    <Section>
      <Container>
        <blockquote
          className={css({
            display: display.grid,
            gridTemplateRows: '2fr 1fr',
            gridTemplateColumns: 'repeat(4, 1fr)',
            margin: 0,
            [md]: {
              gridTemplateColumns: 'repeat(6, 1fr)',
            },
            [lg]: {
              gridTemplateColumns: 'repeat(12, 1fr)',
            },
          })}
        >
          <span
            className={css({
              fontStyle: 'italic',
              fontSize: theme.sizing.scale800,
              lineHeight: theme.sizing.scale1000,
              gridRow: '1/2',
              gridColumn: '1/-1',
              alignSelf: 'end',
              [lg]: {
                gridColumn: '3/11',
              },
            })}
          >
            <Paragraph1 color={theme.colors.primary600} font={'inherit'}>
              "{body}"
            </Paragraph1>
          </span>
          <div
            className={css({
              gridRow: '2/3',
              gridColumn: '-3/-1',
              justifySelf: 'end',
              textAlign: 'right',
              textTransform: 'uppercase',
              fontFamily: 'mono',
              [lg]: {
                gridColumn: '3/11',
              },
            })}
          >
            <Paragraph4 color={theme.colors.primary500}>
              {name}
              <br />
              {title}
              <br />
              {date}
            </Paragraph4>
          </div>
        </blockquote>
      </Container>
    </Section>
  );
};
