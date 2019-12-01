import React, { FunctionComponent } from 'react';
import { Player } from './player';

import {
  Section,
  Container,
  Grid,
  GridItemLeft,
  GridItemRight,
} from '../grid-system';
import { useStyletron } from 'baseui';
import { Paragraph2, Label2 } from 'baseui/typography';
import { mq } from '../styles';

import { VideoType } from './types'

const VideoTitle:FunctionComponent<{title:string}> = ({ title }) => {
  const [css, theme] = useStyletron();
  return (
    <Label2
      // @ts-ignore
      className={css({
        color: theme.colors.primary500,
        textTransform: 'uppercase',
      })}
      font="inherit"
    >
      {title}
    </Label2>
  );
};

export const Video: FunctionComponent<VideoType> = ({
  $color,
  $backgroundColor,
  title,
  caption,
  videoSrc,
  videoId,
  poster,
}) => {
  const [css, theme] = useStyletron();
  const lg = mq.lg;
  const color = $color || theme.colors.primary700;
  const bgColor = $backgroundColor || theme.colors.primary50;

  return (
    <Section $backgroundColor={bgColor} $color={color}>
      <Container $color={theme.colors.primary300} $borderBottom={false}>
        <Grid>
          <GridItemLeft leftCols={[4, 6, 8]} orderLeft={0}>
            <Player videoId={videoId} videoSrc={videoSrc} poster={poster} />
          </GridItemLeft>
          <GridItemRight rightCols={[4, 6, 4]} orderRight={1}>
            <div
              className={css({
                textAlign: 'center',
                marginTop: theme.sizing.scale1200,
                fontSize: theme.sizing.scale700,
                [lg]: {
                  textAlign: 'initial',
                  marginTop: 0,
                  fontSize: theme.sizing.scale600,
                },
              })}
            >
              <VideoTitle title={title} />
              <Paragraph2
                font="inherit"
                // @ts-ignore
                className={css({ lineHeight: theme.sizing.scale900 })}
              >
                {caption}
              </Paragraph2>
            </div>
          </GridItemRight>
        </Grid>
      </Container>
    </Section>
  );
};
