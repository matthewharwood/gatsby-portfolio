import { componentMapFactory } from './component-map';

export const pageRenderer = (data: any) => {
  const componentMap = componentMapFactory();

  return (
    data._rawContent &&
    data._rawContent.map((d: any, index: number) =>
      componentMap[d._type](data._rawContent[index], index)
    )
  );
};
