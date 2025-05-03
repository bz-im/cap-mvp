import { Payload } from 'payload'
import type { User } from './payload-types'

export const seedUsers = async (payload: Payload): Promise<void> => {
  // Local API methods skip all access control by default
  // so we can easily create an admin user directly in init
  await payload.create({
    collection: 'users',
    data: {
      email: 'bzhang@im.org',
      password: 'test',
      firstName: 'Bei',
      lastName: 'Zhang',
      roles: ['admin'],
    },
  })

  // This user will be created with the default role of `editor`
  await payload.create({
    collection: 'users',
    data: {
      email: 'editor1@im.org',
      password: 'test',
      firstName: 'Editor1',
      lastName: 'Plant',
      roles: ['editor'],
    },
  })
}
