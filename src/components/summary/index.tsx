import React, { useState, FunctionComponent } from 'react';
import { Section, Container, Grid } from '../@design-system/block-layout';
import { Display4, Label1, Label4, Paragraph1 } from 'baseui/typography';
import { AspectRatioBox, AspectRatioBoxBody } from 'baseui/aspect-ratio-box';
import { Block } from 'baseui/block';

// @ts-ignore
import ArrowRight from 'baseui/icon/arrow-right';

import { PropTypes } from './types';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from 'baseui/modal';

const TopElement: FunctionComponent = ({ children }) => {
  return <Block gridColumn="span 8">{children}</Block>;
};

const VideoThumbnail: FunctionComponent = ({ children }) => {
  return (
    <Block
      gridColumn="span 4"
      marginTop="scale400"
      overrides={{
        Block: {
          style: { cursor: 'pointer' },
        },
      }}
    >
      {children}
    </Block>
  );
};

const bodyProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'primary300',
};

export const Summary: FunctionComponent<PropTypes> = ({
  eyebrow,
  title,
  body,
  accentColor,
  backgroundColor,
  backgroundInner,
  color,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function close() {
    setIsOpen(false);
  }

  const bgColor = backgroundColor || 'primary50';
  const bgInner = backgroundInner || 'primary50';
  const textColor = color || 'primary700';
  const accent = accentColor || 'accent';

  return (
    <>
      <Section $backgroundColor={bgColor} $backgroundFullBleed={true}>
        <Container $textColor={textColor} $backgroundColor={bgInner}>
          <Grid>
            <TopElement>
              <Label1 color={accent}>{eyebrow}</Label1>
              <Display4 color={'inheirt'}>{title}</Display4>
              <Paragraph1 color={'inheirt'}>{body}</Paragraph1>
            </TopElement>
          </Grid>
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
