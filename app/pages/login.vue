<template>
  <div class="font-(family-name:--font-dm-sans)">
    <div class="flex items-center justify-center min-h-dvh w-full px-4 py-8"
      style="background: #F9F9FF; background: linear-gradient(309deg, rgba(249, 249, 255, 1) 100%, rgba(240, 244, 250, 1) 100%);">
      <div class="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-lg shadow-lg bg-white md:grid-cols-2">
        <div class="flex flex-col justify-center px-6 py-8 sm:px-10">
          <form @submit.prevent="handleLogin" class="flex flex-col justify-center">
            <h1 class="mb-4 text-3xl font-bold text-[#001E40]">Login</h1>
            <hr class="mb-4 border-gray-300 border-dashed" />
            <h3 class="text-lg font-medium text-gray-900">Welcome back!</h3>
            <h6 class="mb-5 text-md text-gray-500">Sign in to check professor schedules.</h6>

            <!-- Email -->
            <div class="mb-4">
              <label for="email" class="mb-2 text-sm font-medium text-gray-900">Email</label>
              <input type="email" id="email" v-model="form.email" required
                class="border border-gray-300 bg-[#E2E8F8] rounded-md p-2 w-full" />
            </div>

            <!-- Password -->
            <div class="mb-4">
              <label for="password" class="mb-2 text-sm font-medium text-gray-900">Password</label>
              <input type="password" id="password" v-model="form.password" required
                class="border border-gray-300 bg-[#E2E8F8] rounded-md p-2 w-full mb-1" />
              <a href="/login" class="text-sm text-[#001E40] hover:text-[#001E40]/90"><u>Forget password</u></a>
            </div>

            <!-- Remember me -->
            <div class="mb-4">
              <label class="flex items-center text-sm">
                <input type="checkbox" v-model="rememberMe" class="mr-2" />
                Remember me
              </label>
            </div>

            <!-- Error message -->
            <div v-if="errorMessage" class="mb-4 text-sm text-red-600">
              {{ errorMessage }}
            </div>

            <!-- Submit -->
            <div>
              <button type="submit" :disabled="isLoading"
                class="w-full rounded-4xl bg-[#001E40] px-4 py-3 text-sm font-semibold text-white hover:bg-[#001E40]/90 disabled:opacity-50">
                {{ isLoading ? 'Signing in...' : 'Sign in' }}
              </button>
            </div>

            <!-- Switch to Register -->
            <div class="mt-4 text-center text-sm text-gray-600">
              Don't have an account?
              <NuxtLink to="/register" class="text-[#001E40] font-semibold hover:underline">Register</NuxtLink>
            </div>
          </form>
        </div>

        <div class="hidden md:flex items-stretch">
          <img src="../assets/img/4PIXART.jpg" alt="Hero Image" class="h-full w-full object-cover" />
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
const rememberMe = ref(false)

const form = ref({
  email: '',
  password: '',
})

const handleLogin = async () => {
  errorMessage.value = ''
  isLoading.value = true

  try {
    const { data, error } = await useFetch('/api/login', {
      method: 'POST',
      body: {
        email: form.value.email,
        password: form.value.password,
      },
    })

    if (error.value) {
      throw new Error(error.value.data?.statusMessage || 'Login failed')
    }

    // Store JWT token
    if (data.value?.token) {
      localStorage.setItem('auth_token', data.value.token)
      localStorage.setItem('auth_user', JSON.stringify(data.value.user))
    }

    // Redirect to faculty dashboard
    router.push('/Faculty')
  } catch (err) {
    errorMessage.value = err.message
  } finally {
    isLoading.value = false
  }
}
</script>