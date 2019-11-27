export type LabDataType = {
  data: {
    allSanityLab?: {
      edges: Array<{
        node: CardDataType;
      }>;
    };
  };
};

export type LabCardsGridType = {
  data: LabCardsGridDataType;
};

export type LabCardsGridDataType = {
  todoCards: CardsColumnDataType;
  doingCards: CardsColumnDataType;
  doneCards: CardsColumnDataType;
};

export type CardsColumnType = {
  data: CardsColumnDataType;
};

export type labCardBackgroundType = 'image' | 'video';

export type ImageType = {
  asset: {
    fluid: GatsbySanityImageFluid_withWebp;
  };
};

export type GatsbySanityImageFluid_withWebp = {
  base64: string;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp: string;
  srcSetWebp: string;
  sizes: string;
};

export type CardDataType = {
  image: ImageType;
  video: {
    asset: {
      url: string;
    };
  };
  tags?: Array<string>;
  slug: { current: string };
  status: string;
  title: string;
  labCardBackgroundType?: labCardBackgroundType;
};

export type CardsColumnDataType = {
  heading: string;
  cards: Array<CardDataType>;
};
