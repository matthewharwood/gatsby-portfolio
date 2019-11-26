export const mq = {
  sm: '@media (max-width: 599px)',
  md: '@media (min-width: 600px) and (max-width: 1139px)',
  lg: '@media (min-width: 1140px)',
};
type positions = 'absolute' | 'relative' | 'static' | 'sticky' | 'fixed';
export const positions: { [key: string]: positions } = {
  absolute: 'absolute',
  relative: 'relative',
  static: 'static',
  sticky: 'sticky',
  fixed: 'fixed',
};

export const fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

export const display = {
  none: 'none',
  grid: 'grid',
  block: 'block',
  flex: 'flex',
};

export const colors = {
  transparent: 'transparent',
  primary300Opacity: 'rgba(247,247,247,0.95)',
};
