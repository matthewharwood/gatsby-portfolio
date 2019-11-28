import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { LightThemeMove } from 'baseui';
import { AspectRatioBox, AspectRatioBoxBody } from 'baseui/aspect-ratio-box';
import { H1, Paragraph1 } from 'baseui/typography';

import { Button } from 'baseui/button';
import { BlockContainer } from './block-container';
import { GridItem } from './block-layout';

const storyModule = storiesOf('System/block-container', module);
const { colors } = LightThemeMove;
const videoAsset = {
  videoUrl1080Webm:
    'https://www.uber-assets.com/video/upload/v1557180924/videos/webloops/1920x1080/WEBM/Ellis_NYC01_Ed_WebLoop_1920x1080.webmhd.webm',
  videoUrl720Webm:
    'https://www.uber-assets.com/video/upload/v1557180948/videos/webloops/1280x720/WEBM/Ellis_TOKYO_WebLoops_1280x720.webmhd.webm',
  videoUrl480Webm:
    'https://www.uber-assets.com/video/upload/v1557180948/videos/webloops/1280x720/WEBM/Ellis_TOKYO_WebLoops_1280x720.webmhd.webm',
  videoUrl360Webm:
    'https://uber.box.com/shared/static/xrayvjz9ytz1y7ghdq8ow8tmry0goi4o.webm',
  videoUrl1080Mp4:
    'https://d1a3f4spazzrp4.cloudfront.net/dotcom-assets/videos/driver-learning/AnthemCutdownScreens_1920x1080_v002.mp4',
  videoUrl720Mp4:
    'https://d1a3f4spazzrp4.cloudfront.net/dotcom-assets/videos/driver-learning/AnthemCutdownScreens_1280x720_v002.mp4',
  videoUrl480Mp4:
    'https://d1a3f4spazzrp4.cloudfront.net/dotcom-assets/videos/driver-learning/AnthemCutdownScreens_858x480_v002.mp4',
  videoUrl360Mp4:
    'https://uber.box.com/shared/static/1lhzzs0wvg5mo94hfkgx2ivtrgy9qiev.mp4',
};

const bgImageLarge = {
  title: 'This is a test caption',
  src:
    'http://res.cloudinary.com/uber-com/image/upload/v1531952112/UberIM_001920.jpg',
  rtlMirror: true,
};
const bgImageMedium = {
  title: 'tis is an test cpation',
  src:
    'https://www.uber-assets.com/image/upload/v1534193330/banner_full_imgRight_768-T.png',
  rtlMirror: true,
};
const bgImageSmall = {
  title: 'tis is an test cpation',
  src:
    'https://www.uber-assets.com/image/upload/v1534193330/banner_full_bottom_375-M.png',
  rtlMirror: true,
};

const imageLarge = {
  title: 'This is a test caption',
  src:
    'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco/v1544128494/assets/67/1acd72-4945-4d85-8d57-f9ff945f58af/original/Global-Rider-Bike-crossing-street.png',
  rtlMirror: true,
};

// @ts-ignore
storyModule.add('with Basic Layout', () => (
  <BlockContainer
    // @ts-ignore
    alignContainer={select('Align Container', {
      Top: 'flex-start',
      Center: 'center',
      Bottom: 'flex-end',
    })}
    anchorName={text('Anchor Name', 'block-container-basic')}
    backgroundFullBleed={boolean('Full Bleed Background', false)}
    backgroundOverlay={text('Background Overlay Color', '')}
    containerBackgroundColor={text(
      'Container Background Color',
      colors.mono100
    )}
    containerBackgroundTransparent={boolean(
      'Container Background Transparent',
      false
    )}
    height={text('Height', 'auto')}
    // @ts-ignore
    marginTop={select('Margin Top', {
      Full: 'full',
      Half: 'half',
      None: 'none',
    })}
    // @ts-ignore
    marginBottom={select('Margin Bottom', {
      Full: 'full',
      Half: 'half',
      None: 'none',
    })}
    removePaddingBottom={boolean('Remove Padding Bottom', false)}
    removePaddingSides={boolean('Remove Padding Sides', false)}
    removePaddingTop={boolean('Remove Padding top', false)}
    backgroundColor={text('Section Background Color', colors.mono100)}
  >
    <GridItem $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}>
      <div>
        <H1>Always the ride you want</H1>
        <Paragraph1>Request a ride, hop in, and go.</Paragraph1>
        <Button> Hello </Button>
      </div>
    </GridItem>
    <GridItem $gridColumn={['1/-1', '1/-1', 'span 4', '7 / span 6']}>
      <AspectRatioBox aspectRatio={3 / 4}>
        <AspectRatioBoxBody>
          <img src={imageLarge.src} alt={'any'} />
        </AspectRatioBoxBody>
      </AspectRatioBox>
    </GridItem>
  </BlockContainer>
));

storyModule.add('with Background Image', () => (
  <BlockContainer
    // @ts-ignore
    alignContainer={select('Align Container', {
      Top: 'flex-start',
      Center: 'center',
      Bottom: 'flex-end',
    })}
    anchorName={text('Anchor Name', 'block-container-with-bg-image')}
    backgroundFullBleed={boolean('Full Bleed Background', false)}
    backgroundImageLarge={bgImageLarge}
    backgroundImageMedium={bgImageMedium}
    backgroundImageSmall={bgImageSmall}
    backgroundOverlay={text('Background Overlay Color', '')}
    containerBackgroundColor={text(
      'Container Background Color',
      colors.mono100
    )}
    containerBackgroundTransparent={boolean(
      'Container Background Transparent',
      false
    )}
    height={text('Height', 'auto')}
    // @ts-ignore
    marginTop={select('Margin Top', {
      Full: 'full',
      Half: 'half',
      None: 'none',
    })}
    // @ts-ignore
    marginBottom={select('Margin Bottom', {
      Full: 'full',
      Half: 'half',
      None: 'none',
    })}
    removePaddingBottom={boolean('Remove Padding Bottom', false)}
    removePaddingSides={boolean('Remove Padding Sides', false)}
    removePaddingTop={boolean('Remove Padding top', false)}
    backgroundColor={text('Section Background Color', colors.mono100)}
  >
    <GridItem $gridColumn={['1/-1', '1/-1', 'span 8', 'span 10']}>
      <div>
        <H1>Always the ride you want</H1>
        <Paragraph1>Request a ride, hop in, and go.</Paragraph1>
        <Button> Hello </Button>
      </div>
    </GridItem>
  </BlockContainer>
));

storyModule.add('with Full Width Video Background', () => (
  <BlockContainer
    // @ts-ignore
    alignContainer={select('Align Container', {
      Top: 'flex-start',
      Center: 'center',
      Bottom: 'flex-end',
    })}
    anchorName={text('Anchor Name', 'block-container-with-background-video')}
    // @ts-ignore
    autoplayVideo={videoAsset}
    backgroundFullBleed={boolean('Full Bleed Background', true)}
    backgroundOverlay={text('Background Overlay Color', '')}
    containerBackgroundColor={text(
      'Container Background Color',
      colors.mono100
    )}
    containerBackgroundTransparent={boolean(
      'Container Background Transparent',
      true
    )}
    height={text('Height', 'auto')}
    // @ts-ignore
    marginTop={select('Margin Top', {
      Full: 'full',
      Half: 'half',
      None: 'none',
    })}
    // @ts-ignore
    marginBottom={select('Margin Bottom', {
      Full: 'full',
      Half: 'half',
      None: 'none',
    })}
    removePaddingBottom={boolean('Remove Padding Bottom', false)}
    removePaddingSides={boolean('Remove Padding Sides', false)}
    removePaddingTop={boolean('Remove Padding top', false)}
    backgroundColor={text('Section Background Color', colors.mono100)}
  >
    <GridItem $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}>
      <div>
        <H1 color={colors.mono100}>Always the ride you want</H1>
        <Paragraph1 color={colors.mono100}>
          Request a ride, hop in, and go.
        </Paragraph1>
      </div>
    </GridItem>
  </BlockContainer>
));

storyModule.add('with Full Width and Large Video Background Only', () => (
  <BlockContainer
    // @ts-ignore
    alignContainer={select('Align Container', {
      Top: 'flex-start',
      Center: 'center',
      Bottom: 'flex-end',
    })}
    anchorName={text(
      'Anchor Name',
      'block-container-with-medium-background-video-only'
    )}
    autoplayVideo={{
      // @ts-ignore
      videoUrl1080Webm:
        'https://www.uber-assets.com/video/upload/v1557180924/videos/webloops/1920x1080/WEBM/Ellis_NYC01_Ed_WebLoop_1920x1080.webmhd.webm',
      videoUrl1080Mp4:
        'https://d1a3f4spazzrp4.cloudfront.net/dotcom-assets/videos/driver-learning/AnthemCutdownScreens_1920x1080_v002.mp4',
    }}
    backgroundFullBleed={boolean('Full Bleed Background', true)}
    backgroundOverlay={text('Background Overlay Color', '')}
    containerBackgroundColor={text(
      'Container Background Color',
      colors.mono1000
    )}
    containerBackgroundTransparent={boolean(
      'Container Background Transparent',
      true
    )}
    height={text('Height', 'auto')}
    // @ts-ignore
    marginTop={select('Margin Top', {
      Full: 'full',
      Half: 'half',
      None: 'none',
    })}
    // @ts-ignore
    marginBottom={select('Margin Bottom', {
      Full: 'full',
      Half: 'half',
      None: 'none',
    })}
    removePaddingBottom={boolean('Remove Padding Bottom', false)}
    removePaddingSides={boolean('Remove Padding Sides', false)}
    removePaddingTop={boolean('Remove Padding top', false)}
    backgroundColor={text('Section Background Color', colors.mono100)}
  >
    <GridItem $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}>
      <div>
        <H1 color={colors.mono1000}>Always the ride you want</H1>
        <Paragraph1 color={colors.mono1000}>
          Request a ride, hop in, and go.
        </Paragraph1>
        <Button> Hello </Button>
      </div>
    </GridItem>
  </BlockContainer>
));

storyModule.add('with Full Width and Medium Video Background Only', () => (
  <BlockContainer
    // @ts-ignore
    alignContainer={select('Align Container', {
      Top: 'flex-start',
      Center: 'center',
      Bottom: 'flex-end',
    })}
    anchorName={text(
      'Anchor Name',
      'block-container-with-medium-background-video-only'
    )}
    autoplayVideo={{
      // @ts-ignore
      videoUrl720Webm:
        'https://www.uber-assets.com/video/upload/v1557180948/videos/webloops/1280x720/WEBM/Ellis_TOKYO_WebLoops_1280x720.webmhd.webm',
      videoUrl720Mp4:
        'https://d1a3f4spazzrp4.cloudfront.net/dotcom-assets/videos/driver-learning/AnthemCutdownScreens_1280x720_v002.mp4',
    }}
    backgroundFullBleed={boolean('Full Bleed Background', true)}
    backgroundOverlay={text('Background Overlay Color', '')}
    containerBackgroundColor={text(
      'Container Background Color',
      colors.mono1000
    )}
    containerBackgroundTransparent={boolean(
      'Container Background Transparent',
      true
    )}
    height={text('Height', 'auto')}
    // @ts-ignore
    marginTop={select('Margin Top', {
      Full: 'full',
      Half: 'half',
      None: 'none',
    })}
    // @ts-ignore
    marginBottom={select('Margin Bottom', {
      Full: 'full',
      Half: 'half',
      None: 'none',
    })}
    removePaddingBottom={boolean('Remove Padding Bottom', false)}
    removePaddingSides={boolean('Remove Padding Sides', false)}
    removePaddingTop={boolean('Remove Padding top', false)}
    backgroundColor={text('Section Background Color', colors.mono100)}
  >
    <GridItem $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}>
      <div>
        <H1 color={colors.mono1000}>Always the ride you want</H1>
        <Paragraph1 color={colors.mono1000}>
          Request a ride, hop in, and go.
        </Paragraph1>
        <Button> Hello </Button>
      </div>
    </GridItem>
  </BlockContainer>
));

storyModule.add('with Full Width and Small Video Background Only', () => (
  <BlockContainer
    // @ts-ignore
    alignContainer={select('Align Container', {
      Top: 'flex-start',
      Center: 'center',
      Bottom: 'flex-end',
    })}
    anchorName={text(
      'Anchor Name',
      'block-container-with-medium-background-video-only'
    )}
    autoplayVideo={{
      // @ts-ignore
      videoUrl480Webm:
        'https://www.uber-assets.com/video/upload/v1557180948/videos/webloops/1280x720/WEBM/Ellis_TOKYO_WebLoops_1280x720.webmhd.webm',
      videoUrl480Mp4:
        'https://d1a3f4spazzrp4.cloudfront.net/dotcom-assets/videos/driver-learning/AnthemCutdownScreens_858x480_v002.mp4',
    }}
    backgroundFullBleed={boolean('Full Bleed Background', true)}
    backgroundOverlay={text('Background Overlay Color', '')}
    containerBackgroundColor={text(
      'Container Background Color',
      colors.mono1000
    )}
    containerBackgroundTransparent={boolean(
      'Container Background Transparent',
      true
    )}
    height={text('Height', 'auto')}
    // @ts-ignore
    marginTop={select('Margin Top', {
      Full: 'full',
      Half: 'half',
      None: 'none',
    })}
    // @ts-ignore
    marginBottom={select('Margin Bottom', {
      Full: 'full',
      Half: 'half',
      None: 'none',
    })}
    removePaddingBottom={boolean('Remove Padding Bottom', false)}
    removePaddingSides={boolean('Remove Padding Sides', false)}
    removePaddingTop={boolean('Remove Padding top', false)}
    backgroundColor={text('Section Background Color', colors.mono100)}
  >
    <GridItem $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}>
      <div>
        <H1 color={colors.mono1000}>Always the ride you want</H1>
        <Paragraph1 color={colors.mono1000}>
          Request a ride, hop in, and go.
        </Paragraph1>
        <Button> Hello </Button>
      </div>
    </GridItem>
  </BlockContainer>
));

storyModule.add('with Full Width and Default Video Background Only', () => (
  <BlockContainer
    // @ts-ignore
    alignContainer={select('Align Container', {
      Top: 'flex-start',
      Center: 'center',
      Bottom: 'flex-end',
    })}
    anchorName={text(
      'Anchor Name',
      'block-container-with-medium-background-video-only'
    )}
    autoplayVideo={{
      // @ts-ignore
      videoUrl360Webm:
        'https://uber.box.com/shared/static/xrayvjz9ytz1y7ghdq8ow8tmry0goi4o.webm',
      videoUrl360Mp4:
        'https://uber.box.com/shared/static/1lhzzs0wvg5mo94hfkgx2ivtrgy9qiev.mp4',
    }}
    backgroundFullBleed={boolean('Full Bleed Background', true)}
    backgroundOverlay={text('Background Overlay Color', '')}
    containerBackgroundColor={text(
      'Container Background Color',
      colors.mono1000
    )}
    containerBackgroundTransparent={boolean(
      'Container Background Transparent',
      true
    )}
    height={text('Height', 'auto')}
    // @ts-ignore
    marginTop={select('Margin Top', {
      Full: 'full',
      Half: 'half',
      None: 'none',
    })}
    // @ts-ignore
    marginBottom={select('Margin Bottom', {
      Full: 'full',
      Half: 'half',
      None: 'none',
    })}
    removePaddingBottom={boolean('Remove Padding Bottom', false)}
    removePaddingSides={boolean('Remove Padding Sides', false)}
    removePaddingTop={boolean('Remove Padding top', false)}
    backgroundColor={text('Section Background Color', colors.mono100)}
  >
    <GridItem $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}>
      <div>
        <H1 color={colors.mono1000}>Always the ride you want</H1>
        <Paragraph1 color={colors.mono1000}>
          Request a ride, hop in, and go.
        </Paragraph1>
        <Button> Hello </Button>
      </div>
    </GridItem>
  </BlockContainer>
));

storyModule.add('with Background Image and Container color', () => (
  <BlockContainer
    // @ts-ignore
    alignContainer={select('Align Container', {
      Top: 'flex-start',
      Center: 'center',
      Bottom: 'flex-end',
    })}
    anchorName={text(
      'Anchor Name',
      'block-container-with-bg-image-container-color'
    )}
    backgroundFullBleed={boolean('Full Bleed Background', false)}
    backgroundImageLarge={bgImageLarge}
    backgroundImageMedium={bgImageMedium}
    backgroundImageSmall={bgImageSmall}
    backgroundOverlay={text('Background Overlay Color', '')}
    containerBackgroundColor={text(
      'Container Background Color',
      colors.warning200
    )}
    containerBackgroundTransparent={boolean(
      'Container Background Transparent',
      false
    )}
    height={text('Height', 'auto')}
    // @ts-ignore
    marginTop={select('Margin Top', {
      Full: 'full',
      Half: 'half',
      None: 'none',
    })}
    // @ts-ignore
    marginBottom={select('Margin Bottom', {
      Full: 'full',
      Half: 'half',
      None: 'none',
    })}
    removePaddingBottom={boolean('Remove Padding Bottom', false)}
    removePaddingSides={boolean('Remove Padding Sides', false)}
    removePaddingTop={boolean('Remove Padding top', false)}
    backgroundColor={text('Section Background Color', colors.mono100)}
  >
    <GridItem $gridColumn={['1/-1', '1/-1', 'span 8', 'span 10']}>
      <div>
        <H1>Always the ride you want</H1>
        <Paragraph1>Request a ride, hop in, and go.</Paragraph1>
        <Button> Hello </Button>
      </div>
    </GridItem>
  </BlockContainer>
));

storyModule.add('with Full Width Video Background and Height', () => (
  <BlockContainer
    // @ts-ignore
    alignContainer={select('Align Container', {
      Top: 'flex-start',
      Center: 'center',
      Bottom: 'flex-end',
    })}
    anchorName={text(
      'Anchor Name',
      'block-container-with-background-video-transparent-container'
    )}
    // @ts-ignore
    autoplayVideo={videoAsset}
    backgroundFullBleed={boolean('Full Bleed Background', false)}
    backgroundOverlay={text('Background Overlay Color', '')}
    containerBackgroundColor={text(
      'Container Background Color',
      colors.mono100
    )}
    containerBackgroundTransparent={boolean(
      'Container Background Transparent',
      true
    )}
    height={text('Height', '900px')}
    // @ts-ignore
    marginTop={select('Margin Top', {
      Full: 'full',
      Half: 'half',
      None: 'none',
    })}
    // @ts-ignore
    marginBottom={select('Margin Bottom', {
      Full: 'full',
      Half: 'half',
      None: 'none',
    })}
    removePaddingBottom={boolean('Remove Padding Bottom', false)}
    removePaddingSides={boolean('Remove Padding Sides', false)}
    removePaddingTop={boolean('Remove Padding top', false)}
    backgroundColor={text('Section Background Color', colors.mono100)}
  >
    <GridItem $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}>
      <div>
        <H1 color={colors.mono100}>Always the ride you want</H1>
        <Paragraph1 color={colors.mono100}>
          Request a ride, hop in, and go.
        </Paragraph1>
        <Button> Hello </Button>
      </div>
    </GridItem>
  </BlockContainer>
));

storyModule.add(
  'with Full Width, Section Background Color, Container Background Color, Content Aligned Bottom',
  () => (
    <BlockContainer
      // @ts-ignore
      alignContainer={select('Align Container', {
        Top: 'flex-start',
        Center: 'center',
        Bottom: 'flex-end',
      })}
      anchorName={text('Anchor Name', 'block-container-basic')}
      backgroundFullBleed={boolean('Full Bleed Background', true)}
      backgroundOverlay={text('Background Overlay Color', '')}
      containerBackgroundColor={text(
        'Container Background Color',
        colors.warning500
      )}
      containerBackgroundTransparent={boolean(
        'Container Background Transparent',
        false
      )}
      height={text('Height', 'auto')}
      // @ts-ignore
      marginTop={select('Margin Top', {
        Full: 'full',
        Half: 'half',
        None: 'none',
      })}
      // @ts-ignore
      marginBottom={select('Margin Bottom', {
        Full: 'full',
        Half: 'half',
        None: 'none',
      })}
      removePaddingBottom={boolean('Remove Padding Bottom', false)}
      removePaddingSides={boolean('Remove Padding Sides', false)}
      removePaddingTop={boolean('Remove Padding top', false)}
      backgroundColor={text('Section Background Color', colors.warning200)}
    >
      <GridItem
        $alignSelf="flex-end"
        $gridColumn={['1/-1', '1/-1', 'span 4', 'span 5']}
      >
        <div>
          <H1>Always the ride you want</H1>
          <Paragraph1>Request a ride, hop in, and go.</Paragraph1>
          <Button> Hello </Button>
        </div>
      </GridItem>
      <GridItem $gridColumn={['1/-1', '1/-1', 'span 4', '7 / span 6']}>
        <AspectRatioBox aspectRatio={3 / 4}>
          <AspectRatioBoxBody>
            <img src={imageLarge.src} alt={'wtf'} />
          </AspectRatioBoxBody>
        </AspectRatioBox>
      </GridItem>
    </BlockContainer>
  )
);
