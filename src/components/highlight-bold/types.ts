import { RawImageType } from '../sanity-img-fluid/types';

export type PropTypes = {
  full?: boolean;
  backgroundColor?: string;
  color?: string;
  accentColor?: string;
  borderBottom?: boolean;
  eyebrow?: string;
  title?: string;
  body?: string;
  leftCols?: Array<number>;
  rightCols?: Array<number>;
  orderLeft?: number;
  orderRight?: number;
  image: RawImageType;
};
