import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as {
      name: string
      email: string
      department: string
      officeLocation: string
    } | null,
    token: null as string | null
  }),

  actions: {
    setUser(userData: any) {
      this.user = userData
    },
    setToken(token: string) {
      this.token = token
    },
    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('auth_token')
      localStorage.removeItem('auth_user')
    }
  }
})