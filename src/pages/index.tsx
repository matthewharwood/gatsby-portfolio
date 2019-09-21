import React from "react"
import { Headline } from '../components/headline';

const IndexPage = () => (
  <>
    <Headline
      main={{ text: 'Nike Jordan Editor' }}
      sub={{text: 'A real-time WYSIWYG editor for project owners, designers, copywriters to rapid prototype pages.'}}
      eyebrow={{ text: 'Web Application', textColor: 'red' }} />
  </>
)

export default IndexPage
