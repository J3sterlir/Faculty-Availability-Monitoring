import mongoose from 'mongoose'
import { defineNitroPlugin } from 'nitropack/runtime/plugin'

export default defineNitroPlugin(async () => {
  const config = useRuntimeConfig()
  const uri = config.mongoUri as string

  if (!uri) {
    console.error('❌ MONGO_URI is not defined in .env')
    return
  }

  try {
    await mongoose.connect(uri)
    console.log('✅ MongoDB connected')
  } catch (err) {
    console.error('❌ MongoDB connection error:', err)
  }
})