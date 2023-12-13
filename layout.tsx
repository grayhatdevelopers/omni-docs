import React, { type ReactNode } from 'react'

import { CommonSEO } from '@/components/landing/SEO'
import Htmllayout from '@/components/landing/htmlLayout'
import { type Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

export const metadata: Metadata = {
  ...siteMetadata,
  title: 'Omni - Docs - ' + siteMetadata.postAppendedTitle,
  description:
    "We're building tools which make it easier to dub videos and audio from one language to another."
}

const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <Htmllayout>
      <CommonSEO />
      <body>
        <main className="app">{children}</main>
      </body>
    </Htmllayout>
  )
}

export default Rootlayout
