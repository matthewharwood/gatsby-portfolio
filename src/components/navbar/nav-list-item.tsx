import React, { FunctionComponent } from 'react';
import { ListItemType } from './types';
import { useStyletron } from 'baseui';
import { Link } from 'gatsby';
import { Label2 } from 'baseui/typography';

const ListItem: FunctionComponent<ListItemType> = ({ title }) => {
  const [css, theme] = useStyletron();
  return (
    <Link
      className={css({
        textDecoration: 'none',
        color: 'inherit',
      })}
      to={title}
    >
      <li
        className={css({
          marginLeft: theme.sizing.scale1600,
        })}
      >
        <Label2
          color={'inherit'}
          margin={0}
          className={css({
            fontSize: theme.sizing.scale600,
          })}
        >
          {title}
        </Label2>
      </li>
    </Link>
  );
};

export { ListItem };
