import React from 'react';
import { componentMapFactory } from '../component-map';
import { SANITY_RAW_CONTENT } from "../__fixtures__/sanity"
import renderer from "react-test-renderer"
import { Folio } from "../../components/folio"

describe('Page Renderer ', () => {
  it('should be _type postHeader', () => {
    const _typeArr = SANITY_RAW_CONTENT._rawContent.map(({_type}) => _type);
    expect(_typeArr[0]).toBe('postHeader');
  });

  it('should render postHeader', () => {
    const _typeArr = SANITY_RAW_CONTENT._rawContent.map(({_type}) => _type);
    const componentMap = componentMapFactory();
    // expect(componentMap[_typeArr[0]](SANITY_RAW_CONTENT._rawContent)).toBe('POSTHEADER');
    const Component = componentMap[_typeArr[0]](SANITY_RAW_CONTENT._rawContent[0]);
    // console.log(componentMap[_typeArr[0]], SANITY_RAW_CONTENT._rawContent[0])
    const tree = renderer
      .create(Component)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
