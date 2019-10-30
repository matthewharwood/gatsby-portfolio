import React, { useState } from 'react';
import { Section, Container, Grid } from '../grid-system';
import { useStyletron } from 'baseui';
import { Display4, Label1, Label4, Paragraph1 } from 'baseui/typography';
import { AspectRatioBox, AspectRatioBoxBody } from 'baseui/aspect-ratio-box';
// @ts-ignore
import ArrowRight from 'baseui/icon/arrow-right';
import { display } from '../styles';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from 'baseui/modal';

const TopElement = ({ children }: any) => {
  const [css] = useStyletron();
  const c = {
    className: css({
      display: display.grid,
      gridColumn: 'span 8',
    }),
  };

  return <div {...c}>{children}</div>;
};


const VideoThumbnail = ({ children }: any) => {
  const [css] = useStyletron();
  const c = {
    className: css({
      display: 'grid',
      gridColumn: 'span 4',
      cursor: 'pointer',
    }),
  };
  return <div {...c}>{children}</div>;
};

const bodyProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'primary300',
};

export const Summary = ({
  eyebrow,
  title,
  body,
  $accentColor,
  $backgroundColor,
  $borderBottom,
  $color,
}: any) => {
  const [, theme] = useStyletron();
  const [isOpen, setIsOpen] = useState(false);

  function close() {
    setIsOpen(false);
  }

  const backgroundColor = $backgroundColor || theme.colors.primary100;
  const color = $color || theme.colors.primary700;
  const accent = $accentColor || theme.colors.accent;

  return (
    <>
      <Section
        $backgroundColor={backgroundColor}
        $color={color}
        $collapsePaddingBottom={!!$borderBottom}
      >
        <Container $borderBottom={$borderBottom} $color={color}>
          <Grid>
            <TopElement>
              <Label1 color={accent}>{eyebrow}</Label1>
              <Display4 color={'inheirt'}>{title}</Display4>
              <Paragraph1 color={'inheirt'}>{body}</Paragraph1>
            </TopElement>
            <Grid>
              <VideoThumbnail>
                <AspectRatioBox aspectRatio={16 / 9}>
                  <AspectRatioBoxBody
                    {...bodyProps}
                    // @ts-ignore
                    onClick={() => setIsOpen(true)}
                  >
                    <ArrowRight size={36} />
                  </AspectRatioBoxBody>
                </AspectRatioBox>
                <Label4>Demo Video</Label4>
              </VideoThumbnail>
              <VideoThumbnail>
                <AspectRatioBox aspectRatio={16 / 9}>
                  <AspectRatioBoxBody
                    {...bodyProps}
                    // @ts-ignore
                    onClick={() => setIsOpen(true)}
                  >
                    <ArrowRight size={36} />
                  </AspectRatioBoxBody>
                </AspectRatioBox>
                <Label4>Demo Video</Label4>
              </VideoThumbnail>
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Modal onClose={close} isOpen={isOpen}>
        <ModalHeader>Hello world</ModalHeader>
        <ModalBody>
          Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
          faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
        </ModalBody>
        <ModalFooter>
          <ModalButton onClick={close}>Cancel</ModalButton>
          <ModalButton onClick={close}>Okay</ModalButton>
        </ModalFooter>
      </Modal>
    </>
  );
};
