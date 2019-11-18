export type CardItemProps = {
  accentColor: string;
  $color: string;
  $labelColor: string;
  heading: string;
  subheading: string;
  text: string;
};

export type SolutionCardsProp = {
  data: any[];
  legend?: any[];
  $color?: string;
  cardsDirection?: string;
};

export type ChallengeProps = {
  challengeNum: string;
  challengeText: string;
  solution: string;
  takeaway?: string;
  $color?: string;
  cardsDirection?: string;
  solutionCards?: any[];
  legend?: any[];
};
