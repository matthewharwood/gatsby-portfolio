import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContent from './blockContent';
import category from './category';
import post from './post';
import author from './author';

import imageAsset from './shared/imageAsset';

import lab from '../../src/components/lab/schema';
import work from '../../src/components/work/schema';
import process from '../../src/components/process/schema';
import imageSection from '../../src/components/image-section/schema';
import centeredHeading from '../../src/components/centered-heading/schema';
import imageGallery from '../../src/components/image-gallery/schema';
import codeComponent from '../../src/components/code-component/schema';

import summary from '../../src/components/summary/schema';
import postHeader from '../../src/components/post-header/schema';
import highlight from '../../src/components/highlight/schema';
import highlightBold from '../../src/components/highlight-bold/schema';
import quote from '../../src/components/quote/schema';
import video from '../../src/components/video/schema';
import projectOverviewSchema from '../../src/components/post-header/schema/projectOverview';
import resource from '../../src/components/post-header/schema/resource';
import label from './baseui/label';
import link from './baseui/link';
import person from './person';
import challenge from '../../src/components/challenge/schema/index';
import legend from '../../src/components/challenge/schema/legend';
import solutionCard from '../../src/components/challenge/schema/solution-card';
import client from '../../src/components/post-header/schema/client';
import collaborators from '../../src/components/post-header/schema/collaborators';
import company from '../../src/components/post-header/schema/company';
import resources from '../../src/components/post-header/schema/resources';
import role from '../../src/components/post-header/schema/role';
import technology from '../../src/components/post-header/schema/technology';
import when from '../../src/components/post-header/schema/when';
import {
  listLinkData,
  listData,
} from '../../src/components/post-header/schema/overview-type';
import step from '../../src/components/base-schemas/step/schema';
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    step,
    client,
    listLinkData,
    listData,
    collaborators,
    company,
    resources,
    role,
    technology,
    when,
    label,
    legend,
    solutionCard,
    person,
    challenge,
    link,
    post,
    author,
    category,
    work,
    summary,
    postHeader,
    highlight,
    highlightBold,
    quote,
    video,
    projectOverviewSchema,
    lab,
    resource,
    imageSection,
    centeredHeading,
    imageGallery,
    imageAsset,
    codeComponent,
    blockContent,
    process,
  ]),
});
