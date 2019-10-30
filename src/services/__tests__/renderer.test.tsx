import React from 'react';
// import renderer from 'react-test-renderer';
import { pageRenderer } from '../renderer';
import { SANITY_RAW_CONTENT } from "../__fixtures__/sanity"

describe('Page Renderer ', () => {
  it('should be _type postHeader', () => {
    const _typeArr = SANITY_RAW_CONTENT.map(({_type}) => _type);
    expect(_typeArr[0]).toBe('postHeader');
  });

  it('should render postHeader', () => {
    const _typeArr = SANITY_RAW_CONTENT.map(({_type}) => _type);
    expect(_typeArr[0]).toBe('postHeader');
  });
});
