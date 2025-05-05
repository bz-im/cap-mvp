import { cache } from "react"
import { getPayload } from 'payload'
import configPromise from '@payload-config'

/**
 * Query documents for simple pages collection
 */
export const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'simple-pages',
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})