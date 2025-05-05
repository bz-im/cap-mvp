import { HeroBlock } from '@/blocks/HeroBlock'
import { slugField } from '@/fields/slug/slug'
import { isAdmin, isAdminOrEditor } from '@/utils/access-control'
import type { CollectionConfig } from 'payload'

export const SimplePages: CollectionConfig = {
  slug: 'simple-pages',
  access: {
    // only admin can create new pages
    create: isAdmin,
    // only admin can delete existing simple pages
    delete: isAdmin,
    // editors can read and update simple pages
    read: isAdminOrEditor,
    update: isAdminOrEditor,
  },

  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    ...slugField('title'),

    {
      name: 'layout',
      type: 'blocks',
      blocks: [HeroBlock],
      required: true,
      admin: {
        initCollapsed: true,
      },
    },

    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],

  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
