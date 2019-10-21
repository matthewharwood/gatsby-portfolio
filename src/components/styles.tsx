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

export const display = {
  none: 'none',
  grid: 'grid',
  block: 'block',
  flex: 'flex',
};

export const colors = {
  transparent: 'transparent',
};
