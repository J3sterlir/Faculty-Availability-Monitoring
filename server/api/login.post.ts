import jwt from 'jsonwebtoken'
import { defineEventHandler, readBody, createError } from 'h3'
import { useRuntimeConfig } from '#imports'
import { User } from '../models/user'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  const { email, password } = body

  // ── Validate input ──────────────────────────────────────────────────────────
  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email and password are required.',
    })
  }

  // ── Find user — explicitly include password field ───────────────────────────
  const user = await User.findOne({ email: email.toLowerCase().trim() }).select('+password')

  if (!user || !user.isActive) {
    throw createError({ statusCode: 401, statusMessage: 'Invalid email or password.' })
  }

  // ── Verify password ─────────────────────────────────────────────────────────
  const isMatch = await user.comparePassword(password)
  if (!isMatch) {
    throw createError({ statusCode: 401, statusMessage: 'Invalid email or password.' })
  }

  // ── Update lastLogin ────────────────────────────────────────────────────────
  user.lastLogin = new Date()
  await user.save({ validateBeforeSave: false })

  // ── Sign JWT ────────────────────────────────────────────────────────────────
  const token = jwt.sign(
    { id: user._id, role: user.role },
    config.jwtSecret as string,
    { expiresIn: '7d' }
  )

  return {
    success: true,
    message: 'Login successful.',
    token,
    user: {
      _id:            user._id,
      name:           user.name,
      email:          user.email,
      department:     user.department,
      officeLocation: user.officeLocation,
      status:         user.status,
      statusNote:     user.statusNote,
      statusUpdatedAt: user.statusUpdatedAt,
      role:           user.role,
    },
  }
})
