import React, { useState } from 'react';
import { Drawer, SIZE, ANCHOR } from 'baseui/drawer';
import { useStyletron } from 'baseui';
import { FooterLeft } from './left';
import { FooterRight } from './right';

import { mq, display } from '../styles';
import { SOCIAL } from './data';

export const Footer = () => {
  const [css, theme] = useStyletron();
  const md = mq.md;
  const lg = mq.lg;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer
      className={css({
        display: display.flex,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
          paddingRight: theme.sizing.scale600,
          paddingTop: theme.sizing.scale800,
          paddingBottom: theme.sizing.scale800,
        },
      })}
    >
      <FooterLeft />
      <FooterRight setIsOpen={setIsOpen} />
      <Drawer
        isOpen={isOpen}
        /* eslint-disable-next-line jsx-a11y/no-autofocus */
        autoFocus
        onClose={() => setIsOpen(false)}
        size={SIZE.full}
        anchor={ANCHOR.bottom}
      >
        {Object.entries(SOCIAL).map(([key, { url, src }]) => {
          return (
            <>
              <pre>{key}: </pre>
              <pre>{url}</pre>
              <pre>{src}</pre>
            </>
          );
        })}
      </Drawer>
    </footer>
  );
};
