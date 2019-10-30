import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'

import work from './work'
import summary from './work/summary'
import postHeader from './work/postHeader'
import highlight from './work/highlight'
import highlightBold from './work/highlightBold'
import process from './work/process'
import quote from './work/quote'
import video from './work/video'
import projectOverviewSchema from './work/postHeader/projectOverview'
import resource from './work/postHeader/resource'
import label from './baseui/label';
import link from './baseui/link';
import person from './person';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    label,
    person,
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
    resource,
    blockContent,
  ])
})
