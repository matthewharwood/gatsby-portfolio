import { display } from '../styles';

export const Display = (theme: {
  mediaQuery: { large: string; medium: string; small: string };
}) => {
  return {
    notMobile: {
      display: display.none,
      [theme.mediaQuery.medium]: {
        display: display.block,
      },
      [theme.mediaQuery.large]: {
        display: display.block,
      },
    },
  };
};
