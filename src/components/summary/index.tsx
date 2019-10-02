import React, { useState } from 'react';
import { Section, Container, Grid } from '../grid-system';
import { useStyletron } from 'baseui';
import { Display3, Label1, Label4, Paragraph1 } from 'baseui/typography';
import { AspectRatioBox, AspectRatioBoxBody } from 'baseui/aspect-ratio-box';
import ArrowRight from 'baseui/icon/arrow-right';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from 'baseui/modal';

const TopElement = ({ children }: any) => {
  const [css, theme] = useStyletron();
  const c = {
    className: css({
      display: theme.display.grid,
      gridColumn: 'span 8',
    }),
  };

  return <div {...c}>{children}</div>;
};

const BottomElement = ({ $borderColor, children }: any) => {
  const [css, theme] = useStyletron();
  const c = {
    className: css({
      display: theme.display.grid,
      gridColumn: '1/-1',
      paddingBottom: theme.sizing.scale1600,
    }),
  };

  return <div {...c}>{children}</div>;
};
const VideoThumbnail = ({ children }: any) => {
  const [css, theme] = useStyletron();
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
  $color,
}: any) => {
  const [, theme] = useStyletron();
  const [isOpen, setIsOpen] = useState(false);
  console.log(setIsOpen);
  function close() {
    setIsOpen(false);
  }
  function open() {
    console.log('yo');
  }
  const backgroundColor = $backgroundColor || theme.colors.primary100;
  const color = $color || theme.colors.primary700;
  const accent = $accentColor || theme.colors.accent;
  return (
    <>
      <Section $backgroundColor={backgroundColor} $color={color}>
        <Container>
          <Grid>
            <TopElement>
              <Label1 color={accent}>{eyebrow}</Label1>
              <Display3 color={'inheirt'}>{title}</Display3>
              <Paragraph1 color={'inheirt'}>{body}</Paragraph1>
            </TopElement>
            <Grid>
              <VideoThumbnail>
                <AspectRatioBox aspectRatio={16 / 9}>
                  <AspectRatioBoxBody
                    {...bodyProps}
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
