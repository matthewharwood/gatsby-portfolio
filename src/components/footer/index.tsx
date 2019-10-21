import React from 'react';
import { useStyletron } from 'baseui';
import { Label4 } from 'baseui/typography';
import { FacebookIcon } from '../icons/facebook';
import { InstagramIcon } from '../icons/instagram';
import { LinkedinIcon } from '../icons/linkedin';
import { TwitterIcon } from '../icons/twitter';
import { mq, display, positions } from '../styles';
export const Footer = () => {
  const [css, theme] = useStyletron();
  const md = mq.md;
  const lg = mq.lg;
  return (
    <footer
      className={css({
        display: display.flex,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: theme.sizing.scale900,
        paddingBottom: theme.sizing.scale700,
        [md]: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: theme.sizing.scale800,
          paddingRight: theme.sizing.scale1000,
          paddingTop: theme.sizing.scale800,
          paddingBottom: theme.sizing.scale800,
        },
        [lg]: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: theme.sizing.scale800,
          paddingRight: theme.sizing.scale1000,
          paddingTop: theme.sizing.scale800,
          paddingBottom: theme.sizing.scale800,
        },
      })}
    >
      <FooterLeft />
      <FooterRight />
    </footer>
  );
};

const FooterLeft = () => {
  const [css, theme] = useStyletron();
  return (
    <Label4>
      <span className={css({ marginRight: theme.sizing.scale500 })}>
        &#xA9;
      </span>
      MORNING HARWOOD 2018
    </Label4>
  );
};

const FooterRight = () => {
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
      <FacebookIcon />
      <InstagramIcon />
      <LinkedinIcon />
      <TwitterIcon />
    </div>
  );
};
