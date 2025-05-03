import type { CheckboxField, TextField } from 'payload'

import { formatSlugHook } from '@/hooks/field-hooks/slug-hooks'

// To manually override automatically generated slug
type Overrides = {
  slugOverrides?: Partial<TextField>
  checkboxOverrides?: Partial<CheckboxField>
}

type Slug = (fieldToUse?: string, overrides?: Overrides) => [TextField, CheckboxField]

export const slugField: Slug = (fieldToUse = 'title', overrides = {}) => {
  const { slugOverrides, checkboxOverrides } = overrides

  const checkBoxField: CheckboxField = {
    name: 'slugLock',
    type: 'checkbox',
    defaultValue: true,
    admin: {
      hidden: false,
      position: 'sidebar',
    },
    ...checkboxOverrides,
  }

    // @ts-expect-error - ts mismatch Partial<TextField> with TextField
    const slugField: TextField = {
      name: 'slug',
      type: 'text',
      index: true,
      label: 'Slug',
      ...(slugOverrides || {}),
      hooks: {
        // formats slug based the source field's value
        beforeValidate: [formatSlugHook(fieldToUse)],
      },
      admin: {
        position: 'sidebar',
        ...(slugOverrides?.admin || {}),
        // components: {
        //   Field: {
        //     path: '@/cms-components/SlugField',
        //     clientProps: {
        //       fieldToUse,
        //       checkboxFieldPath: checkBoxField.name,
        //     },
        //   },
        // },
      },
    }





  return [slugField, checkBoxField]
}
