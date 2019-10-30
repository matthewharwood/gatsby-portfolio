import React from 'react';
import renderer from 'react-test-renderer';
import { pageRenderer } from '../renderer';

describe('Page Renderer ', () => {
  it('should return true', () => {

    expect(pageRenderer()).toBe(true);
  })
});
