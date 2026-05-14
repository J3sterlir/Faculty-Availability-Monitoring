import jwt from 'jsonwebtoken'
import { defineEventHandler, readBody, createError, getHeader } from 'h3'
import { useRuntimeConfig } from '#imports'
import { User } from '../../models/user'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const authHeader = getHeader(event, 'authorization')

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Authorization token required.',
    })
  }

  const token = authHeader.substring(7) // Remove 'Bearer '

  let decoded: any
  try {
    decoded = jwt.verify(token, config.jwtSecret as string)
  } catch (err) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid or expired token.',
    })
  }

  const body = await readBody(event)
  const { status, statusNote } = body

  // Validate status
  const validStatuses = ['available', 'busy', 'virtual_only', 'on_leave', 'absent']
  if (!status || !validStatuses.includes(status)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid status. Must be one of: ' + validStatuses.join(', '),
    })
  }

  // Validate statusNote
  if (statusNote && statusNote.length > 200) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Status note must be 200 characters or less.',
    })
  }

  try {
    const user = await User.findById(decoded.id)
    if (!user || !user.isActive) {
      throw createError({
        statusCode: 404,
        statusMessage: 'User not found.',
      })
    }

    // Update status
    user.status = status
    user.statusNote = statusNote || ''
    user.statusUpdatedAt = new Date()
    await user.save()

    return {
      success: true,
      message: 'Status updated successfully.',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        department: user.department,
        officeLocation: user.officeLocation,
        status: user.status,
        statusNote: user.statusNote,
        statusUpdatedAt: user.statusUpdatedAt,
        role: user.role,
      },
    }
  } catch (err: any) {
    if (err.statusCode) throw err // Re-throw createError
    throw createError({ statusCode: 500, statusMessage: 'Server error. Please try again.' })
  }
})