import { useStyletron } from 'baseui';
import { Button, KIND, SHAPE } from 'baseui/button';
import { display, mq } from '../styles';
import { StatefulPopover, TRIGGER_TYPE } from 'baseui/popover';
import { FacebookIcon } from '../icons/facebook';
import { InstagramIcon } from '../icons/instagram';
import { TwitterIcon } from '../icons/twitter';
import { LinkedinIcon } from '../icons/linkedin';
import { More } from '../icons/more';

import React, { FunctionComponent } from 'react';

const FooterButton = ({ children, setIsOpen }) => {
  return (
    <Button
      shape={SHAPE.round}
      kind={KIND.minimal}
      onClick={() => setIsOpen(true)}
    >
      {children}
    </Button>
  );
};

export const FooterRight: FunctionComponent<{ setIsOpen: Function }> = ({
  setIsOpen,
}) => {
  const [css, theme] = useStyletron();
  const md = mq.md;
  const lg = mq.lg;

  return (
    <div
      className={css({
        display: display.flex,
        justifyContent: 'space-between',
        order: -1,
        alignContent: 'center',
        marginBottom: theme.sizing.scale600,
        [md]: {
          marginBottom: 0,
          order: 0,
        },
        [lg]: {
          marginBottom: 0,
          order: 0,
        },
      })}
    >
      <StatefulPopover
        content={() => 'Hello, there! 👋'}
        triggerType={TRIGGER_TYPE.hover}
        showArrow
      >
        <FooterButton setIsOpen={setIsOpen}>
          <FacebookIcon scale={0.8} />
        </FooterButton>
      </StatefulPopover>
      <FooterButton setIsOpen={setIsOpen}>
        <InstagramIcon scale={0.8} />
      </FooterButton>
      <FooterButton setIsOpen={setIsOpen}>
        <LinkedinIcon scale={0.8} />
      </FooterButton>
      <FooterButton setIsOpen={setIsOpen}>
        <TwitterIcon scale={0.8} />
      </FooterButton>
      <FooterButton setIsOpen={setIsOpen}>
        <More scale={0.8} />
      </FooterButton>
    </div>
  );
};
