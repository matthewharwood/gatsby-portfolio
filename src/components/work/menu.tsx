import React, { FunctionComponent } from 'react';

import { useStyletron } from 'baseui';
import { Navigation } from 'baseui/side-navigation';
import {mq} from '../styles'
export const Menu: FunctionComponent<any> = ({
  items,
  currentItemId,
  setCurrentItemId,
}) => {
  const [, theme] = useStyletron();
  const menuItems = items.map((i: any, index: any) => ({
    index,
    title: `${index < 10 ? '0' + index + `:   ` : index + `:   `} ${i.label}`,
    itemId: `#${index}`,
  }));

  const location = menuItems[currentItemId].itemId;

  return (
    <Navigation
      items={menuItems}
      activeItemId={location}
      onChange={({ item }) => {
        setCurrentItemId(item.index);
      }}
      overrides={{
        NavLink: {
          style: () => {
            return {
              borderLeftColor: '#449922',
            };
          },
        },
      }}
    />
  );
};

export const MenuGrid:FunctionComponent = props => {
  const [css, theme] = useStyletron();
  const lg = mq.lg;
  const md = mq.md;
  return (
    <div
      className={css({
        overflow: 'auto',
        position: 'relative',
        paddingLeft: theme.sizing.scale200,
        paddingTop: theme.sizing.scale700,
        paddingBottom: theme.sizing.scale0,
        [md]: {
          paddingLeft: theme.sizing.scale200,
          paddingTop: theme.sizing.scale1000,
        },
        [lg]: {
          paddingLeft: theme.sizing.scale1600,
        },
      })}
    >
      {props.children}
    </div>
  );
};
