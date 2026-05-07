import { defineEventHandler, readBody, createError } from 'h3'
import { User } from '../models/user'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, department, officeLocation, password } = body

  // ── Basic validation ────────────────────────────────────────────────────────
  if (!name || !email || !department || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'name, email, department, and password are required.',
    })
  }

  if (password.length < 6) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Password must be at least 6 characters.',
    })
  }

  // ── Duplicate email check ───────────────────────────────────────────────────
  const existing = await User.findOne({ email: email.toLowerCase().trim() })
  if (existing) {
    throw createError({
      statusCode: 409,
      statusMessage: 'An account with this email already exists.',
    })
  }

  try {
    const user = await User.create({
      name,
      email,
      password,
      department,
      officeLocation: officeLocation ?? '',
    })

    return {
      success: true,
      message: 'Account created successfully.',
      user: {
        _id:            user._id,
        name:           user.name,
        email:          user.email,
        department:     user.department,
        officeLocation: user.officeLocation,
        status:         user.status,
        role:           user.role,
      },
    }
  } catch (err: any) {
    // Mongoose validation errors
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((e: any) => e.message)
      throw createError({ statusCode: 400, statusMessage: messages.join('. ') })
    }
    throw createError({ statusCode: 500, statusMessage: 'Server error. Please try again.' })
  }
})