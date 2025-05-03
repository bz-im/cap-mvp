import { isAdmin, isAdminOrEditor } from "@/utils/access-control"
import type { CollectionConfig } from "payload"

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
    {
      type: 'tabs',
      tabs: [
        {
          fields: [],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        
      ],
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