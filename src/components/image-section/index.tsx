import React, { useRef, FunctionComponent } from 'react';
import useComponentSize from '@rehooks/component-size';


import { Container } from '../grid-system';
import { useStyletron } from 'baseui';
import { mq } from '../styles';

const ImageSection: FunctionComponent<{ image: string }> = ({ image }) => {
  const [css, theme] = useStyletron();

  const ref = useRef(null);
  const size = useComponentSize(ref);
  const { width } = size;

  return (
    <Container>
      <img
        className={css({
          width: '100%',
          height: `${width/(16/9)}px`,
          marginTop: theme.sizing.scale900,
          marginBottom: theme.sizing.scale900,
          [mq.lg]: {
            marginTop: 0,
          },
        })}
        ref={ref}
        src={image.image.asset.url}
        alt={image.altText}
      />
    </Container>
  );
};

export default ImageSection;
