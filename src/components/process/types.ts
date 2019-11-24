export type Props = {
  $backgroundColor?: string;
  $color?: string;
  $borderBottom?: string;
  headline: string;
  steps: step[];
};

export type step = {
  title: string;
};
