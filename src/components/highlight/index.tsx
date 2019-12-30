import React, { FunctionComponent } from 'react';
import { Section, Container, Grid } from '../@design-system/block-layout/';
import { Block } from 'baseui/block';
import { Display4, Label1, Paragraph1 } from 'baseui/typography';
import SanityImgFluid from '../sanity-img-fluid';

import { PropTypes } from './types';

const Highlight: FunctionComponent<PropTypes> = ({
  full = false,
  backgroundColor,
  backgrondColorInner,
  color,
  accentColor,
  borderBottom = false,
  image,
  eyebrow = 'eyebrow',
  title = 'title',
  body = 'body',
  leftCols = [4, 4, 8, 10],
  rightCols = [4, 4, 8, 2],
  orderLeft = 0,
  orderRight = 1,
  bold = false,
}) => {
  const bgColor = backgroundColor || 'primary50';
  const bgInner = bold ? backgrondColorInner || 'primary100' : bgColor;
  const textColor = color || 'primary700';
  const accent = accentColor || 'accent';
  const isImageVisible = full ? false : true;

  const leftColsMap = leftCols.map(colVal => `span ${colVal}`);
  const rightColsMap = rightCols.map(colVal => `span ${colVal}`);

  return (
    <Section $backgroundFullBleed={true} $backgroundColor={bgColor}>
      <Container $backgroundColor={bgInner}>
        <Grid>
          <Block
            gridColumn={leftColsMap}
            color={textColor}
            overrides={{
              Block: {
                style: { order: orderLeft },
              },
            }}
          >
            <>
              <Label1 color={accent}>{eyebrow}</Label1>
              <Display4 color={'inherit'}>{title}</Display4>
              <Paragraph1 color={'inherit'}>{body}</Paragraph1>
            </>
          </Block>
          {isImageVisible && (
            <Block
              gridColumn={rightColsMap}
              overrides={{
                Block: {
                  style: { order: orderRight },
                },
              }}
            >
              {image && <SanityImgFluid assetId={image.asset.id} />}
            </Block>
          )}
        </Grid>
      </Container>
    </Section>
  );
};

export { Highlight };
