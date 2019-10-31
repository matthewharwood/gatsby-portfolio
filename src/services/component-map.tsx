import React from 'react';
import {PostHeader} from "../components/post-header";
import {Summary} from "../components/summary"
import {Process} from "../components/process"
import {Highlight} from "../components/highlight"
import {HighlightBold} from "../components/highlight-bold"
import {Quote} from "../components/quote";
import {Video} from "../components/video"
import {Challenge} from "../components/challenge"

const inflection = require( 'inflection' );

export const componentMap = {
  "postHeader": (props: any, key: number) => (<PostHeader {...props} key={key}/>),
  "summary": (props: any, key: number) => (<Summary {...props} key={key}/>),
  "process": (props: any, key: number) => (<Process {...props} key={key}/>),
  "highlight": (props: any, key: number) => (<Highlight {...props} key={key}/>),
  "highlightBold": (props: any, key: number) => (<HighlightBold {...props} key={key}/>),
  "quote": (props: any, key: number) => (<Quote {...props} key={key}/>),
  "video": (props: any, key: number) => (<Video {...props} key={key}/>),
  "challenge": (props: any, key: number) => (<Challenge {...props} key={key} />)
}


// This will not work yet
export const componentMapfn = (props: any, key: number) => {
  const ComponentName = inflection.classify(props._type);
  return <ComponentName {...props} key={key} />;
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