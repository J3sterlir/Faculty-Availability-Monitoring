// server/models/user.ts
import mongoose, { Document, Model, Schema } from 'mongoose'
import bcrypt from 'bcryptjs'

// ── Types ─────────────────────────────────────────────────────────────────────
export interface IUser extends Document {
  name: string
  email: string
  password: string
  department: string
  officeLocation: string
  position: string
  profilePhoto: string
  // Availability
  status: 'available' | 'busy' | 'virtual_only' | 'on_leave' | 'absent'
  statusNote: string
  statusUpdatedAt: Date
  // Weekly schedule
  weeklySchedule: {
    day: string
    startTime: string
    endTime: string
    label: string
  }[]
  // Account
  role: 'faculty' | 'admin'
  isActive: boolean
  lastLogin: Date | null
  // Methods
  comparePassword(candidate: string): Promise<boolean>
}

// ── Schema ────────────────────────────────────────────────────────────────────
const scheduleSlotSchema = new Schema(
  {
    day: {
      type: String,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      required: true,
    },
    startTime: { type: String, required: true },
    endTime:   { type: String, required: true },
    label:     { type: String, default: '' },
  },
  { _id: false }
)

const userSchema = new Schema<IUser>(
  {
    // Identity — matches register.vue form fields
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
      select: false,
    },

    // Academic info
    department:     { type: String, required: [true, 'Department is required'], trim: true },
    officeLocation: { type: String, trim: true, default: '' },
    position:       { type: String, trim: true, default: 'Faculty' },
    profilePhoto:   { type: String, default: '' },

    // Availability status
    status: {
      type: String,
      enum: ['available', 'busy', 'virtual_only', 'on_leave', 'absent'],
      default: 'available',
    },
    statusNote:      { type: String, trim: true, maxlength: 200, default: '' },
    statusUpdatedAt: { type: Date, default: Date.now },

    // Weekly schedule
    weeklySchedule: { type: [scheduleSlotSchema], default: [] },

    // Account meta
    role:      { type: String, enum: ['faculty', 'admin'], default: 'faculty' },
    isActive:  { type: Boolean, default: true },
    lastLogin: { type: Date, default: null },
  },
  { timestamps: true }
)

// ── Hash password before save ─────────────────────────────────────────────────
userSchema.pre<IUser>('save', async function (this: IUser) {
  if (!this.isModified('password')) return
  const salt = await bcrypt.genSalt(12)
  this.password = await bcrypt.hash(this.password, salt)
})

// ── Instance method: compare password ────────────────────────────────────────
userSchema.methods.comparePassword = function (candidate: string) {
  return bcrypt.compare(candidate, this.password)
}

// Guard against model re-registration during hot reload
export const User = (mongoose.models.User ?? mongoose.model<IUser>('User', userSchema)) as Model<IUser>
