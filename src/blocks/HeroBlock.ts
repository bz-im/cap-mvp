import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'text',
      required: false,
    },
    {
      name:'description',
      type:'textarea',
      required:false
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'ctaButtons',
      type: 'array',
      label: 'Call to Action Buttons',
      minRows: 0,
      maxRows: 2,
      labels: {
        singular: 'Button',
        plural: 'Buttons',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
        {
          name: 'variant',
          type: 'select',
          options: [
            {
              label: 'Primary',
              value: 'primary',
            },
            {
              label: 'Secondary',
              value: 'secondary',
            },
            {
              label: 'Text',
              value: 'text',
            },
          ],
          defaultValue: 'primary',
        },
      ],
    },
    {
      name: 'alignment',
      type: 'select',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Center',
          value: 'center',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
      defaultValue: 'center',
    },
  ],
}
