import React, { Fragment } from 'react'

import type { SimplePage } from '@/payload-types'

import { HeroBlockComponent } from '@/blocks/Hero'

const blockComponents = {
  hero: HeroBlockComponent,
}

export const RenderBlocks: React.FC<{
  blocks: SimplePage['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          {
            return 'No block found'
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}

export default RenderBlocks
