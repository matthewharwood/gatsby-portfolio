import React from 'react';

import { useStyletron } from 'baseui';
import { Navigation } from 'baseui/side-navigation';

export const Menu = ({ items, currentItemId, setCurrentItemId }) => {
  const [, theme] = useStyletron();
  const menuItems = items.map((i, index) => ({
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
              borderLeftColor: theme.colors.navAccent,
            };
          },
        },
      }}
    />
  );
};

export const MenuGrid = props => {
  const [css, theme] = useStyletron();
  const lg = theme.mq.lg;
  const md = theme.mq.md;
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

