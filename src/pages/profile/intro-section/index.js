import React from 'react';
import { H1, H4, Paragraph2 } from 'baseui/typography';
import { useStyletron } from 'baseui';
import portrait from '../../../images/me4-sq.jpg';
import { me } from '../../../content/profile';

export const IntroSection = () => {
  const [css, theme] = useStyletron();
  return (
    <section
      className={css({
        display: theme.display.flex,
        flexDirection: 'column',
        top: 0,
        width: '100vw',
        [theme.mediaQuery.large]: {
          flexDirection: 'row',
          position: 'fixed',
        },
      })}
    >
      <header
        className={css({
          display: theme.display.flex,
          flexDirection: 'column',
          justifyContent: 'center',
          padding: `0 ${theme.sizing.scale800}`,
          order: 1,
          paddingTop: theme.sizing.scale1400,
          [theme.mediaQuery.large]: {
            width: '50vw',
            padding: `0 ${theme.sizing.scale3200}`,
            order: 0,
            paddingTop: 0,
          },
        })}
      >
        <H1
          margin={0}
          marginBottom={theme.sizing.scale900}
          className={css({ fontSize: theme.sizing.scale1400 })}
        >
          {me.name}
        </H1>
        <H4 margin={0} color={theme.colors.accent}>
          {me.title}
        </H4>
        <Paragraph2>{me.description}</Paragraph2>
      </header>
      <img
        src={portrait}
        alt=""
        className={css({
          height: '50vh',
          objectFit: 'cover',
          [theme.mediaQuery.large]: {
            width: '50vw',
            height: '100vh',
          },
        })}
      />
    </section>
  );
};
