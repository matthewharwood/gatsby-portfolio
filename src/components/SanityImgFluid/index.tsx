import React from 'react';
import Img from 'gatsby-image'
import {getFluidGatsbyImage} from 'gatsby-source-sanity'

const SanityImgFluid = (props:any) => {
  const { assetId } = props;
  const sanityConfig = {projectId: '42nykw3g', dataset: 'production'}
  const imageAssetId = assetId;

  const fluidProps = getFluidGatsbyImage(imageAssetId, {maxWidth: 1024}, sanityConfig)

  return (
      <Img fluid={fluidProps} {...props} />
  )
}

export default SanityImgFluid;
