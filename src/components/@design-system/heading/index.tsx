import React, { forwardRef, FunctionComponent } from 'react';
import { H1, H2, H5, Label1, Label2, Label3 } from 'baseui/typography';

export const Heading1: FunctionComponent<any> = forwardRef((props, ref) => (
  <H1
    {...props}
    font={props.font || ['font1150', 'font1150', 'font1250', 'font1350']}
    ref={ref}
  />
));
Heading1.displayName = 'Heading1';

export const Heading2: FunctionComponent<any> = forwardRef((props, ref) => (
  <H2
    {...props}
    font={props.font || ['font650', 'font650', 'font750', 'font850']}
    ref={ref}
  />
));
Heading2.displayName = 'Heading2';

export const Heading3: FunctionComponent<any> = forwardRef((props, ref) => (
  <H5 $as="h3" {...props} ref={ref} />
));
Heading3.displayName = 'Heading3';

export const Heading4: FunctionComponent<any> = forwardRef((props, ref) => (
  <Label1 $as="h4" {...props} ref={ref} />
));
Heading4.displayName = 'Heading4';

export const Heading5: FunctionComponent<any> = forwardRef((props, ref) => (
  <Label2 $as="h5" {...props} ref={ref} />
));
Heading5.displayName = 'Heading5';

export const Heading6: FunctionComponent<any> = forwardRef((props, ref) => (
  <Label3 $as="h6" {...props} ref={ref} />
));
Heading6.displayName = 'Heading6';
