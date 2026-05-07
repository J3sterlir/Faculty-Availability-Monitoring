<template>
  <div class="font-(family-name:--font-dm-sans)">
    <div class="flex items-center justify-center min-h-dvh w-full px-4 py-8"
      style="background: #F9F9FF; background: linear-gradient(309deg, rgba(249, 249, 255, 1) 100%, rgba(240, 244, 250, 1) 100%);">
      <div class="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-lg shadow-lg bg-white md:grid-cols-2">
        <!-- Registration Form Column -->
        <div class="flex flex-col justify-center px-6 py-8 sm:px-10">
          <form @submit.prevent="handleRegister" class="flex flex-col justify-center">
            <h1 class="mb-4 text-3xl font-bold text-[#001E40]">Register</h1>
            <hr class="mb-4 border-gray-300 border-dashed" />
            <h3 class="text-lg font-medium text-gray-900">Create your account</h3>
            <h6 class="mb-5 text-md text-gray-500">Join as a professor to manage your availability.</h6>

            <!-- Full Name -->
            <div class="mb-4">
              <label for="fullName" class="mb-2 text-sm font-medium text-gray-900">Full Name</label>
              <input type="text" id="fullName" v-model="form.fullName" required
                class="border border-gray-300 bg-[#E2E8F8] rounded-md p-2 w-full" />
            </div>

            <!-- Email -->
            <div class="mb-4">
              <label for="email" class="mb-2 text-sm font-medium text-gray-900">Email address</label>
              <input type="email" id="email" v-model="form.email" required
                class="border border-gray-300 bg-[#E2E8F8] rounded-md p-2 w-full" />
            </div>

            <!-- Department -->
            <div class="mb-4">
              <label for="department" class="mb-2 text-sm font-medium text-gray-900">Department</label>
              <select id="department" v-model="form.department" required
                class="border border-gray-300 bg-[#E2E8F8] rounded-md p-2 w-full">
                <option value="" disabled>Select department</option>
                <option value="Computer Studies">Computer Studies</option>
                <option value="Business & Tech">Business & Tech</option>
                <option value="Engineering">Engineering</option>
                <option value="Arts & Sciences">Arts & Sciences</option>
                <option value="Mathematics">Mathematics</option>
              </select>
            </div>

            <!-- Office Location -->
            <div class="mb-4">
              <label for="officeLocation" class="mb-2 text-sm font-medium text-gray-900">Office Location</label>
              <input type="text" id="officeLocation" v-model="form.officeLocation" required
                placeholder="e.g., RM 402, 3rd floor"
                class="border border-gray-300 bg-[#E2E8F8] rounded-md p-2 w-full" />
            </div>

            <!-- Password -->
            <div class="mb-4">
              <label for="password" class="mb-2 text-sm font-medium text-gray-900">Password</label>
              <input type="password" id="password" v-model="form.password" required
                class="border border-gray-300 bg-[#E2E8F8] rounded-md p-2 w-full" />
            </div>

            <!-- Error message (if any) -->
            <div v-if="errorMessage" class="mb-4 text-sm text-red-600">
              {{ errorMessage }}
            </div>

            <!-- Submit Button -->
            <div>
              <button type="submit" :disabled="isLoading"
                class="w-full rounded-4xl bg-[#001E40] px-4 py-3 text-sm font-semibold text-white hover:bg-[#001E40]/90 disabled:opacity-50">
                {{ isLoading ? 'Registering...' : 'Register' }}
              </button>
            </div>

            <!-- Switch to Login -->
            <div class="mt-4 text-center text-sm text-gray-600">
              Already have an account?
              <NuxtLink to="/login" class="text-[#001E40] font-semibold hover:underline">Sign In</NuxtLink>
            </div>
          </form>
        </div>

        <!-- Image Column (same as login page) -->
        <div class="hidden md:flex items-stretch">
          <img src="../assets/img/4PIXART.jpg" alt="Registration illustration" class="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(false)
const errorMessage = ref('')

const form = ref({
  fullName: '',
  email: '',
  department: '',
  officeLocation: '',
  password: ''
})

const handleRegister = async () => {
  errorMessage.value = ''
  isLoading.value = true

  try {
    // Validate password strength (optional)
    if (form.value.password.length < 6) {
      throw new Error('Password must be at least 6 characters')
    }

    // Call your backend registration API
    const { data, error } = await useFetch('/api/register', {
      method: 'POST',
      body: {
        name: form.value.fullName,
        email: form.value.email,
        department: form.value.department,
        officeLocation: form.value.officeLocation,
        password: form.value.password
      }
    })

    if (error.value) {
      throw new Error(error.value.data?.message || 'Registration failed')
    }

    // On success, redirect to login page
    router.push('/login')
  } catch (err) {
    errorMessage.value = err.message
  } finally {
    isLoading.value = false
  }
}
</script>