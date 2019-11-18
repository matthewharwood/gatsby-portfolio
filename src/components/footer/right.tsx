import { useStyletron } from 'baseui';
import { display, mq } from '../styles';
import { StatefulPopover, TRIGGER_TYPE } from 'baseui/popover';
import { FacebookIcon } from '../icons/facebook';
import { InstagramIcon } from '../icons/instagram';
import { LinkedinIcon } from '../icons/linkedin';
import { TwitterIcon } from '../icons/twitter';
import React from 'react';

export const FooterRight = () => {
  const [css, theme] = useStyletron();
  const md = mq.md;
  const lg = mq.lg;

  return (
    <div
      className={css({
        display: display.flex,
        width: theme.sizing.scale4800,
        justifyContent: 'space-between',
        order: -1,
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
        <div>
          <FacebookIcon />
        </div>
      </StatefulPopover>
      <InstagramIcon />
      <LinkedinIcon />
      <TwitterIcon />
    </div>
  );
};
