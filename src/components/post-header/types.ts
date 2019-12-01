export type Client = {
  data: string;
  type: string;
};

export type Collaborators = {
  data: {
    items: string[];
    type: string;
  };
};

export type Company = {
  data: string;
  type: string;
};

export type Resources = {
  data: {
    items: Array<{
      _key: string;
      _type: string;
      href: string;
      text: string;
    }>;
    type: string;
  };
};

export type Role = {
  data: string;
  type: string;
};

export type Technology = {
  data: {
    items: string[];
    type: string;
  };
};

export type When = {
  data: string;
  type: string;
};

export type ProjectOverviewType = {
  _type: string;
  client: Client;
  collaborators: Collaborators;
  company: Company;
  resources: Resources;
  role: Role;
  technology: Technology;
  when: When;
};

export type LabelType = {
  text: string;
  _type: string;
};

export type PostHeaderType = {
  eyebrow: LabelType;
  mainText: LabelType;
  subText: LabelType;
  projectOverview: ProjectOverviewType;
  $backgroundColor?: string;
  $color?: string;
};

export type TopElementType = {
  $borderColor: string;
};
