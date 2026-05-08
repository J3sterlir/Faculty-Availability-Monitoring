<template>
    <div class="font-(family-name:--font-dm-sans) bg-[#faf9ff] min-h-dvh scroll-smooth">
        <nav class="bg-[#F0F2FE] flex flex-row p-6 justify-between sticky top-0 z-10 shadow-md sm:pl-20 sm:pr-20">
            <div class="flex flex-col gap-1 items-start sm:flex-row sm:gap-4 sm:items-center">
                <h6 class="font-bold text-sm sm:text-lg">Faculty Availability Hub</h6>
                <div class="h-full w-px bg-gray-400"></div>
                <div class="bg-[#DCE2F3] p-2 rounded-full flex flex-row gap-2 items-center">
                    <div class="h-2 w-2 rounded-full bg-[#1B6D24] animate-pulse"></div>
                    <h1 class="text-xs TEXT-[#151C27] font-semibold">LIVE UPDATES</h1>
                </div>
            </div>

            <!-- User section: name + icons -->
            <div class="flex flex-row gap-4 items-center">
                <!-- Full Name next to profile icon -->
                <span class="hidden sm:block text-sm font-medium text-[#151C27]">{{ professor.fullName }}</span>

                <!-- Profile Icon (opens popup) -->
                <button @click="openPopup" class="text-[#151C27]/50 hover:text-[#151C27] flex flex-row items-center">
                    <Icon name="material-symbols:account-circle" class="h-6 w-6" />
                </button>

                <!-- Settings Icon (opens same popup) -->
                <button @click="openPopup" class="text-[#151C27]/50 hover:text-[#151C27] flex flex-row items-center">
                    <Icon name="ic:baseline-settings" class="h-6 w-6" />
                </button>
            </div>
        </nav>

        <!-- Welcome section -->
        <div class="flex flex-row m-30 mb-0 mt-8 justify-center sm:justify-start sm:mt-30">
            <div class="flex flex-col gap-2">
                <h1 class="text-4xl">Welcome Back, <span class="font-semibold">{{ professor.firstName }}</span></h1>
                <p class="text-base">Manage your visibility and academic presence across the campus network.</p>
            </div>
        </div>

        <!-- Status Cards (purely visual – no click handlers) -->
        <div class="p-1 md:pt-0 sm:p-11">
            <div
                class="flex flex-col m-3 mt-3 bg-white rounded-xl shadow-md h-full lg:p-10 md:p-5 md:pl-0 md:pr-0 sm:m-30 sm:mt-15 sm:pl-10 sm:pr-10">
                <div
                    class="flex flex-col items-center pt-5 lg:items-start lg:pt-0 sm:p-10 md:items-center sm:items-center">
                    <h1 class="text-xl font-bold">Set your status</h1>
                </div>
                <div
                    class="flex flex-row flex-wrap gap-5 justify-center items-stretch p-10 pl-5 pr-5 sm:justify-between sm:pl-20 sm:pr-20">
                    <div
                        class="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border border-[#1B6D24] bg-[#1B6D24]/10 p-4 text-center sm:min-h-35">
                        <Icon name="ic:baseline-check-circle-outline" class="h-10 w-10" />
                        <h1>Available</h1>
                    </div>
                    <div
                        class="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border border-[#BA1A1A] bg-[#BA1A1A]/10 p-4 text-center sm:min-h-35">
                        <Icon name="ic:baseline-block" class="h-10 w-10" />
                        <h1>Busy</h1>
                    </div>
                    <div
                        class="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border border-[#DCE2F3] bg-[#E2E8F8] p-4 text-center sm:min-h-35">
                        <Icon name="ic:outline-video-chat" class="h-10 w-10" />
                        <h1>Virtual only</h1>
                    </div>
                    <div
                        class="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border border-[#DCE2F3] bg-[#E2E8F8] p-4 text-center sm:min-h-35">
                        <Icon name="ic:baseline-flight-takeoff" class="h-10 w-10" />
                        <h1>On Leave</h1>
                    </div>
                    <div
                        class="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border border-[#DCE2F3] bg-[#E2E8F8] p-4 text-center sm:min-h-35">
                        <Icon name="ic:baseline-event-busy" class="h-10 w-10" />
                        <h1>Absent</h1>
                    </div>
                </div>
            </div>
        </div>

        <!-- Popup Modal -->
        <div v-if="popupVisible" class="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
            @click.self="closePopup">
            <div class="bg-white rounded-xl shadow-xl w-80 p-6 relative">
                <button @click="closePopup" class="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                    <Icon name="ic:baseline-close" class="h-5 w-5" />
                </button>
                <div class="flex flex-col gap-3">
                    <h3 class="text-xl font-bold text-[#001E40]">Faculty Info</h3>
                    <div class="border-t border-gray-200 pt-2">
                        <p><span class="font-semibold">Name:</span> {{ professor.fullName }}</p>
                        <p><span class="font-semibold">Email:</span> {{ professor.email }}</p>
                        <p><span class="font-semibold">Department:</span> {{ professor.department }}</p>
                        <p><span class="font-semibold">Room:</span> {{ professor.room }}</p>
                    </div>
                    <button @click="logout"
                        class="mt-4 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
                        Logout
                    </button>
                </div>
            </div>
        </div>

        <footer class="bg-[#F0F2FE] z-10 bottom-0">
            <div class="flex flex-row gap-4 items-center justify-center p-6">
                <h6 class="font-bold text-sm text-[#151C27]/50">© 2026 Faculty Availability Hub. All rights reserved.
                </h6>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const popupVisible = ref(false)

// Get professor data from the store
const professor = computed(() => ({
    fullName: authStore.user?.name || 'Loading...',
    firstName: authStore.user?.name?.split(' ')[0] || 'Faculty',
    email: authStore.user?.email || '—',
    department: authStore.user?.department || '—',
    room: authStore.user?.officeLocation || '—'
}))

const openPopup = () => {
    popupVisible.value = true
}

const closePopup = () => {
    popupVisible.value = false
}

const logout = () => {
    authStore.logout()
    router.push('/login')
}
</script>