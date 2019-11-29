import React from 'react';
import {PostHeader} from "../components/post-header";
import {Summary} from "../components/summary"
import {Process} from "../components/process"
import {Highlight} from "../components/highlight"
import {HighlightBold} from "../components/highlight-bold"
import {Quote} from "../components/quote";
import {Video} from "../components/video"
import {Challenge} from "../components/challenge"

import { ImageSection } from '../components/image-section';
import { ImageGallery } from '../components/image-gallery';
import {CenteredHeading} from '../components/centered-heading';
import {CodeComponent} from '../components/code-component';

export const componentMap = {
  "postHeader": (props: any, key: number) => (<PostHeader {...props} key={key}/>),
  "summary": (props: any, key: number) => (<Summary {...props} key={key}/>),
  "process": (props: any, key: number) => (<Process {...props} key={key}/>),
  "highlight": (props: any, key: number) => (<Highlight {...props} key={key}/>),
  "highlightBold": (props: any, key: number) => (<HighlightBold {...props} key={key}/>),
  "quote": (props: any, key: number) => (<Quote {...props} key={key}/>),
  "video": (props: any, key: number) => (<Video {...props} key={key}/>),
  "challenge": (props: any, key: number) => (<Challenge {...props} key={key} />),
  "imageSection": (props:any, key:number) => (<ImageSection {...props} key={key}/>),
  "centeredHeading": (props:any, key:number) => (<CenteredHeading {...props} key={key}/>),
  "imageGallery": (props:any, key:number) => (<ImageGallery {...props} key={key}/>),
  "codeComponent": (props:any, key:number) => (<CodeComponent {...props} key={key}/>),
}


export function componentMapFactory() {
  let defaultValueHandler = {
    get: function(target: any, name: any) {
      return target.hasOwnProperty(name)
        ? target[name]
        : (props: any) => console.warn(
          "We are missing a component type: ", props._type, "is not found"
        );
    },
  }

  return new Proxy(componentMap, defaultValueHandler)
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
