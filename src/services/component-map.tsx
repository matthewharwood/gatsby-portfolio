import { Folio } from '../components/folio';
import {Boner} from '../components/boner';
import {Challenge} from '../components/challenge'
import React from 'react';
import {PostHeader} from "../components/post-header";

export const componentMap = {
  "postHeader": (props: any) => {
    console.log(props);
    return <PostHeader {...props} />
  },
  "summary": (props: any) => "SUMMARY",
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