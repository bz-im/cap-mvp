import { queryPageBySlug } from '@/utils/fe-data-access/fetch-page-data'
import { type RequiredDataFromCollectionSlug } from 'payload'
import { RenderBlocks } from '../rendering/RenderBLocks'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { slug="quick-start" } = await paramsPromise
  console.log("🚀🚀🚀##### ~ Page ~ slug:", slug)


  const page :RequiredDataFromCollectionSlug<'simple-pages'>= await queryPageBySlug({
    slug,
  })


  if (!page) {
    return "No page found"
  }

  const { layout } = page
  console.log("🚀🚀🚀##### ~ Page ~ layout:", layout)

  return (
    <article className="pt-16 pb-24">

      <RenderBlocks blocks={layout} />
    </article>
  )
}