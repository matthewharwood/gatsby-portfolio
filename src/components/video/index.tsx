import React from 'react';
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

const VideoTitle = ({ title }: { title: string }) => {
  const [css, theme] = useStyletron();
  return (
    <Label2
      className={css({
        color: theme.colors.primary500,
        textTransform: 'uppercase',
      })}
    >
      {title}
    </Label2>
  );
};

interface Props {
  $color?: string;
  $backgroundColor?: string;
  title: string;
  caption: string;
  videoSrc: string;
  videoId: string;
  poster?: string;
}
export const Video = ({
  $color,
  $backgroundColor,
  title,
  caption,
  videoSrc,
  videoId,
  poster,
}: Props) => {
  const [css, theme] = useStyletron();
  const color = $color || theme.colors.primary700;
  const bgColor = $backgroundColor || theme.colors.primary50;

  return (
    <Section $backgroundColor={bgColor} $color={color}>
      <Container $color={theme.colors.primary300} $borderBottom={false}>
        <Grid>
          <GridItemLeft leftCols={8} orderLeft={0}>
            <Player videoId={videoId} videoSrc={videoSrc} poster={poster} />
          </GridItemLeft>
          <GridItemRight rightCols={4} orderRight={1}>
            <div>
              <VideoTitle title={title} />
              <Paragraph2>{caption}</Paragraph2>
            </div>
          </GridItemRight>
        </Grid>
      </Container>
    </Section>
  );
};
