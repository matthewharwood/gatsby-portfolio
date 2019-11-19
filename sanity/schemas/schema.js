import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import blockContent from './blockContent';
import category from './category';
import post from './post';
import author from './author';

import imageAsset from './shared/imageAsset';

import lab from '../schemas/lab';
import work from './work';

import imageSection from './lab/imageSection';
import centeredHeading from './lab/centeredHeading';
import imageGallery from './lab/imageGallery';
import codeComponent from './lab/codeComponent';

import summary from './work/summary';
import postHeader from './work/postHeader';
import highlight from './work/highlight';
import highlightBold from './work/highlightBold';
import process from './work/process';
import quote from './work/quote';
import video from './work/video';
import projectOverviewSchema from './work/postHeader/projectOverview';
import resource from './work/postHeader/resource';
import label from './baseui/label';
import link from './baseui/link';
import person from './person';
import challenge from './work/challenge/challenge';
import legend from './work/challenge/legend';
import solutionCard from './work/challenge/solution-card';
import client from './work/postHeader/client';
import collaborators from './work/postHeader/collaborators';
import company from './work/postHeader/company';
import resources from './work/postHeader/resources';
import role from './work/postHeader/role';
import technology from './work/postHeader/technology';
import when from './work/postHeader/when';
import { listLinkData, listData } from './work/postHeader/overview-type';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
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
    process,
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
  ]),
});
