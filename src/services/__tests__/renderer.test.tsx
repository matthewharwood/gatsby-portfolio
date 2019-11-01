import React from 'react';
import { componentMapFactory } from '../component-map';
import { SANITY_RAW_CONTENT } from "../__fixtures__/sanity"
import renderer from "react-test-renderer"

function component(index:number){
  const _typeArr = SANITY_RAW_CONTENT._rawContent.map(({_type}) => _type);
  const componentMap = componentMapFactory();
  return componentMap[_typeArr[index]](SANITY_RAW_CONTENT._rawContent[index]);
}

describe('Page Renderer ', () => {
  it('should be _type postHeader', () => {
    const _typeArr = SANITY_RAW_CONTENT._rawContent.map(({_type}) => _type);
    expect(_typeArr[0]).toBe('postHeader');
  });

  it('should render postHeader', () => {
    const Component = component(0);
    const tree = renderer
      .create(Component)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render summary', () => {
    const Component = component(1);
    const tree = renderer
      .create(Component)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Process', () => {
    const Component = component(2);
    const tree = renderer
      .create(Component)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Highlight', () => {
    const Component = component(3);
    const tree = renderer
      .create(Component)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render Highlight 2', () => {
    const Component = component(4);
    const tree = renderer
      .create(Component)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render Highlight Bold', () => {
    const Component = component(5);
    const tree = renderer
      .create(Component)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render summary 2', () => {
    const Component = component(6);
    const tree = renderer
      .create(Component)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render summary 3', () => {
    const Component = component(7);
    const tree = renderer
      .create(Component)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render quote', () => {
    const Component = component(8);
    const tree = renderer
      .create(Component)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Video', () => {
    let Component = component(9);
    const tree = renderer
      .create(Component)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render Video', () => {
    let Component = component(9);
    const tree = renderer
      .create(Component)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
