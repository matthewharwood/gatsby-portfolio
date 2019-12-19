import { createTheme, lightThemePrimitives, darkThemePrimitives } from 'baseui';

export const MorningHarwood = createTheme(
  {
    ...lightThemePrimitives,
    // add all the properties here you'd like to override from the light theme primitives
    primaryFontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  {
    colors: {
      ...darkThemePrimitives.colors,
      accent: 'tomato',
      transparent: 'rgba(255,255,255,0)',
    },
    breakpoints: {
      small: 600,
      medium: 768,
      large: 1280,
    },
    mq: {
      sm: '@media (max-width: 599px)',
      md: '@media (min-width: 600px) and (max-width: 1279px)',
      lg: '@media (min-width: 1280px)',
    },
    positions: {
      absolute: 'absolute',
      relative: 'relative',
      static: 'static',
      sticky: 'sticky',
      fixed: 'fixed',
    },
    display: {
      none: 'none',
      grid: 'grid',
      block: 'block',
      flex: 'flex',
    },
  }
);
