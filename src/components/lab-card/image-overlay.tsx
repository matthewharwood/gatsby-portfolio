import React, { FunctionComponent } from 'react';
import { useStyletron } from 'baseui';
import { positions } from '../styles';
import { ImageOverlayT } from './types';

const ImageOverlay: FunctionComponent<ImageOverlayT> = ({
  children,
  contentHeight,
}) => {
  const [css] = useStyletron();
  const imageOverlay = css({
    position: positions.absolute,
    height: `${contentHeight}px`,
    top: 0,
    right: 0,
    left: 0,
  });
  return <div className={imageOverlay}>{children}</div>;
};

export { ImageOverlay };
