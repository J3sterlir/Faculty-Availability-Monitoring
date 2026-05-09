import { defineEventHandler } from 'h3'
import { User } from '../models/user'

export default defineEventHandler(async () => {
  const professors = await User.find(
    { isActive: true },
    {
      name: 1,
      department: 1,
      officeLocation: 1,
      position: 1,
      profilePhoto: 1,
      status: 1,
      statusNote: 1,
      statusUpdatedAt: 1,
    }
  ).sort({ name: 1 })

  return { success: true, professors }
})