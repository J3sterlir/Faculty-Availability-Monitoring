import mongoose from 'mongoose'
import { defineNitroPlugin, useRuntimeConfig } from '#imports'
 
export default defineNitroPlugin(async () => {
  const config = useRuntimeConfig()
 
  try {
    await mongoose.connect(config.mongoUri as string)
    console.log('✅  MongoDB connected')
  } catch (err) {
    console.error('❌  MongoDB connection failed:', err)
  }
})
 