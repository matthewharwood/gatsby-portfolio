import {componentMapFactory} from './component-map';
import { SANITY_RAW_CONTENT } from "./__fixtures__/sanity"


export const pluckType = ({_rawContent}: any) => {
  return _rawContent.map((d: any) => d._type);
}

export const pageRenderer = (data:any) => {
  const componentMap = componentMapFactory();

  return data._rawContent.map((d: any, index:number) => (componentMap[d._type](data._rawContent[index], index)));
}