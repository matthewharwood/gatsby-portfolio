import React from 'react';
import { PostHeader } from '../components/post-header';
import { Summary } from '../components/summary';
import { Process } from '../components/process';
import { Highlight } from '../components/highlight';
import { Quote } from '../components/quote';
import { Video } from '../components/video';
import { Challenge } from '../components/challenge';

import { ImageSection } from '../components/image-section';
import { ImageGallery } from '../components/image-gallery';
import { CenteredHeading } from '../components/centered-heading';
import { CodeComponent } from '../components/code-component';
const PostHeaderLift = (props: any, key: number) => (
  <PostHeader {...props} key={key} />
);
const SummaryLift = (props: any, key: number) => (
  <Summary {...props} key={key} />
);
const ProcessLift = (props: any, key: number) => (
  <Process {...props} key={key} />
);
const HighlightLift = (props: any, key: number) => (
  <Highlight {...props} key={key} />
);
const QuoteLift = (props: any, key: number) => <Quote {...props} key={key} />;
const VideoLift = (props: any, key: number) => <Video {...props} key={key} />;
const ChallengeLift = (props: any, key: number) => (
  <Challenge {...props} key={key} />
);
const ImageSectionLift = (props: any, key: number) => (
  <ImageSection {...props} key={key} />
);
const CenterHeadingLift = (props: any, key: number) => (
  <CenteredHeading {...props} key={key} />
);
const ImageGalleryLift = (props: any, key: number) => (
  <ImageGallery {...props} key={key} />
);
const CodeComponentLift = (props: any, key: number) => (
  <CodeComponent {...props} key={key} />
);
export const componentMap = {
  postHeader: PostHeaderLift,
  summary: SummaryLift,
  process: ProcessLift,
  highlight: HighlightLift,
  quote: QuoteLift,
  video: VideoLift,
  challenge: ChallengeLift,
  imageSection: ImageSectionLift,
  centeredHeading: CenterHeadingLift,
  imageGallery: ImageGalleryLift,
  codeComponent: CodeComponentLift,
};

export function componentMapFactory() {
  const defaultValueHandler = {
    get: function(target: any, name: any) {
      return target?.hasOwnProperty(name)
        ? target[name]
        : (props: any) =>
            console.warn(
              'We are missing a component type: ',
              props._type,
              'is not found'
            );
    },
  };

  return new Proxy(componentMap, defaultValueHandler);
}

// export const componentMap2 = {
//   "postHeader": PostHeader,
//   "summary": Summary,
//   "process": Process,
//   "highlight": Highlight,
//   "highlightBold": HighlightBold,
//   "quote": Quote,
//   "video": Video,
//   "challenge": Challenge,
// }
//
// const components = {
//   photo: PhotoStory,
//   video: VideoStory
// };

// function Story(props) {
//   // Correct! JSX type can be a capitalized variable.
//   const SpecificStory = components[props.storyType];
//   return <SpecificStory story={props.story} />;
// }
