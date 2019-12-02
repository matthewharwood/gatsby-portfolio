import React, { FunctionComponent } from 'react';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import hexToRgba from 'hex-to-rgba';
import { ImageProps, SectionType } from '../types';

const containerWidth = {
  small: '100%',
  medium: '100%',
  large: '1280px',
};

const createImageBackgroundArray = (
  bgImageArray: Array<ImageProps>,
  overlayColor: string
): Array<string> => {
  return bgImageArray.map(img => {
    let bgImage = '';
    if (img && img.src) {
      bgImage = `url(${img.src})`;
      if (overlayColor) {
        bgImage = `linear-gradient(0deg, ${hexToRgba(overlayColor, 0.3)},
            ${hexToRgba(overlayColor, 0.3)}), ${bgImage}`;
      }
      return bgImage;
    }
    return '';
  });
};

export const Section: FunctionComponent<SectionType> = props => {
  const [, theme] = useStyletron();
  const { colors } = theme;
  const {
    $anchorName,
    $backgroundColor = colors.background,
    $backgroundFullBleed = false,
    $backgroundImageLarge = {},
    $backgroundImageMedium = {},
    $backgroundImageSmall = {},
    $backgroundOverlay = '',
    children,
    $height = 'auto',
  } = props;
  const bgColor = $backgroundColor;

  const maxWidth = $backgroundFullBleed
    ? ['100%']
    : [containerWidth.small, containerWidth.medium, containerWidth.large];

  return (
    <Block
      as="section"
      backgroundColor={bgColor}
      // @ts-ignore
      backgroundImage={createImageBackgroundArray(
        [
          $backgroundImageSmall,
          $backgroundImageSmall,
          $backgroundImageMedium,
          $backgroundImageLarge,
        ],
        $backgroundOverlay
      )}
      backgroundPosition="center center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      display="flex"
      height={$height}
      id={$anchorName}
      margin={['0 auto']}
      maxWidth={maxWidth}
      overflow="hidden"
      position="relative"
    >
      {children}
    </Block>
  );
};
