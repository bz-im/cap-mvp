import type { Access, FieldAccess } from 'payload'
import { User } from '../payload-types'

//=============================================================================
// COLLECTION LEVEL
//=============================================================================

/**
 * is the user admin
 * @returns boolean
 */
export const isAdmin: Access<User> = ({ req: { user } }) => {
  // Return true or false based on if the user has an admin role
  return Boolean(user?.roles?.includes('admin'))
}


/**
 * is access allowed to admin or the user self
 * @returns
 */
export const isAdminOrSelf: Access = ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    // If user has role of 'admin'
    if (user.roles?.includes('admin')) {
      return true
    }

    // If any other type of user, only provide access to themselves
    return {
      id: {
        equals: user.id,
      },
    }
  }

  // Reject everyone else
  return false
}



//=============================================================================
// FIELD LEVEL
//=============================================================================

/**
 * does user have admin role for certain field
 */
export const isAdminFieldLevel: FieldAccess<User> = ({ req: { user } }) => {
  // Return true or false based on if the user has an admin role
  return Boolean(user?.roles?.includes('admin'))
}
