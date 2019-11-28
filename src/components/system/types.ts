export type ImageProps = {
  src?: string;
  type?: string;
  title?: string;
  subType?: string;
  rtlMirror?: boolean;
};

export type SectionType = {
  $anchorName?: string;
  $backgroundColor?: string;
  $backgroundFullBleed?: boolean;
  $backgroundImageLarge?: ImageProps;
  $backgroundImageMedium?: ImageProps;
  $backgroundImageSmall?: ImageProps;
  $backgroundOverlay?: string;
  $height?: string;
};

export type AlignSelfT =
  | 'auto'
  | 'baseline'
  | 'center'
  | 'end'
  | 'flex-end'
  | 'flex-start'
  | 'inherit'
  | 'initial'
  | 'normal'
  | 'self-end'
  | 'self-start'
  | 'start'
  | 'stretch'
  | 'unset';

export type SpacingT = 'full' | 'half' | 'none';

export type ContainerType = {
  $alignSelf?: AlignSelfT;
  $backgroundColor?: string;
  $backgroundTransparent?: boolean;
  $marginBottom?: SpacingT;
  $marginTop?: SpacingT;
  $paddingBottom?: SpacingT;
  $paddingLeft?: SpacingT;
  $paddingRight?: SpacingT;
  $paddingTop?: SpacingT;
  $textColor?: string;
  height?: string;
};

type JustifyItemsT =
  /* Basic keywords */
  | 'auto'
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'legacy right'
  | 'legacy left'
  | 'legacy center'
  | 'inherit'
  | 'initial'
  | 'unset';

export type GridType = {
  $backgroundColor?: string;
  $cols?: Array<string>;
  $justifyItems?: JustifyItemsT;
};

export type GridItemType = {
  $alignSelf?: AlignSelfT;
  $gridColumn?: Array<string>;
};

export type VideoFormatT = {
  webM: string;
  mp4: string;
};

export type AutoplayVideoProps = {
  fallback?: VideoFormatT;
  small?: VideoFormatT;
  medium?: VideoFormatT;
  large?: VideoFormatT;
};

export type BlockContainerProps = {
  alignContainer?: AlignSelfT;
  anchorName?: string;
  autoplayVideo?: AutoplayVideoProps;
  backgroundFullBleed?: boolean;
  backgroundImageLarge?: ImageProps;
  backgroundImageMedium?: ImageProps;
  backgroundImageSmall?: ImageProps;
  backgroundOverlay?: string;
  containerBackgroundColor?: string;
  containerBackgroundTransparent?: boolean;
  height?: string;
  marginBottom?: SpacingT;
  marginTop?: SpacingT;
  removePaddingBottom?: boolean;
  removePaddingSides?: boolean;
  removePaddingTop?: boolean;
  backgroundColor?: string;
  textColor?: string;
};
