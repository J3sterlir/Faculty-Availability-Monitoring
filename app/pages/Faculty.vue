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

                <!-- Logout button -->
                <button @click="logout" class="text-[#151C27]/50 hover:text-[#151C27] flex flex-row items-center">
                    <Icon name="ic:baseline-logout" class="h-6 w-6" />
                </button>
            </div>
        </nav>

        <!-- Welcome section -->
        <!-- Welcome section -->
        <div class="flex flex-row m-30 mb-0 mt-8 justify-center sm:justify-start sm:mt-30">
            <div class="flex flex-col gap-2 flex-1">
                <h1 class="text-4xl">Welcome Back, <span class="font-semibold">{{ professor.firstName }}</span></h1>
                <p class="text-base">Manage your visibility and academic presence across the campus network.</p>
            </div>
            <!-- Live View Status -->
            <div
                class="hidden sm:flex flex-col items-end justify-center gap-1 bg-white rounded-xl shadow-sm px-5 py-3 border border-gray-100">
                <div
                    class="flex flex-row items-center gap-2 text-xs text-gray-400 font-semibold tracking-wide uppercase">
                    <Icon name="material-symbols:wifi" class="h-4 w-4" />
                    Live View Status
                </div>
                <span class="font-bold text-base" :class="{
                    'text-[#1B6D24]': selectedStatus === 'available',
                    'text-[#BA1A1A]': selectedStatus === 'busy',
                    'text-blue-600': selectedStatus === 'virtual_only',
                    'text-yellow-600': selectedStatus === 'on_leave',
                    'text-gray-500': selectedStatus === 'absent',
                }">{{ statusLabel }}</span>
            </div>
        </div>

        <!-- Status Cards -->
        <div class="p-1 md:pt-0 sm:p-11">
            <div
                class="flex flex-col m-3 mt-3 bg-white rounded-xl shadow-md h-full lg:p-10 md:p-5 md:pl-0 md:pr-0 sm:m-30 sm:mt-15 sm:pl-10 sm:pr-10">
                <div
                    class="flex flex-col items-center pt-5 lg:items-start lg:pt-0 sm:p-10 md:items-center sm:items-center">
                    <h1 class="text-xl font-bold">Set your status</h1>
                </div>
                <div
                    class="flex flex-row flex-wrap gap-5 justify-center items-stretch p-10 pl-5 pr-5 sm:justify-between sm:pl-20 sm:pr-20">

                    <!-- Available -->
                    <div @click="selectedStatus = 'available'"
                        class="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border p-4 text-center cursor-pointer transition-all duration-200"
                        :class="selectedStatus === 'available'
                            ? 'border-[#1B6D24] bg-[#1B6D24]/10 text-[#1B6D24] scale-105 shadow-md'
                            : 'border-gray-200 bg-gray-50 text-gray-400 scale-95'">
                        <Icon name="ic:baseline-check-circle-outline"
                            :class="selectedStatus === 'available' ? 'h-12 w-12' : 'h-9 w-9'" />
                        <h1 :class="selectedStatus === 'available' ? 'font-bold text-base' : 'text-sm'">Available</h1>
                    </div>

                    <!-- Busy -->
                    <div @click="selectedStatus = 'busy'"
                        class="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border p-4 text-center cursor-pointer transition-all duration-200"
                        :class="selectedStatus === 'busy'
                            ? 'border-[#BA1A1A] bg-[#BA1A1A]/10 text-[#BA1A1A] scale-105 shadow-md'
                            : 'border-gray-200 bg-gray-50 text-gray-400 scale-95'">
                        <Icon name="ic:baseline-block" :class="selectedStatus === 'busy' ? 'h-12 w-12' : 'h-9 w-9'" />
                        <h1 :class="selectedStatus === 'busy' ? 'font-bold text-base' : 'text-sm'">Busy</h1>
                    </div>

                    <!-- Virtual Only -->
                    <div @click="selectedStatus = 'virtual_only'"
                        class="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border p-4 text-center cursor-pointer transition-all duration-200"
                        :class="selectedStatus === 'virtual_only'
                            ? 'border-blue-500 bg-blue-500/10 text-blue-600 scale-105 shadow-md'
                            : 'border-gray-200 bg-gray-50 text-gray-400 scale-95'">
                        <Icon name="ic:outline-video-chat"
                            :class="selectedStatus === 'virtual_only' ? 'h-12 w-12' : 'h-9 w-9'" />
                        <h1 :class="selectedStatus === 'virtual_only' ? 'font-bold text-base' : 'text-sm'">Virtual Only
                        </h1>
                    </div>

                    <!-- On Leave -->
                    <div @click="selectedStatus = 'on_leave'"
                        class="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border p-4 text-center cursor-pointer transition-all duration-200"
                        :class="selectedStatus === 'on_leave'
                            ? 'border-yellow-500 bg-yellow-500/10 text-yellow-600 scale-105 shadow-md'
                            : 'border-gray-200 bg-gray-50 text-gray-400 scale-95'">
                        <Icon name="ic:baseline-flight-takeoff"
                            :class="selectedStatus === 'on_leave' ? 'h-12 w-12' : 'h-9 w-9'" />
                        <h1 :class="selectedStatus === 'on_leave' ? 'font-bold text-base' : 'text-sm'">On Leave</h1>
                    </div>

                    <!-- Absent -->
                    <div @click="selectedStatus = 'absent'"
                        class="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border p-4 text-center cursor-pointer transition-all duration-200"
                        :class="selectedStatus === 'absent'
                            ? 'border-gray-500 bg-gray-500/10 text-gray-600 scale-105 shadow-md'
                            : 'border-gray-200 bg-gray-50 text-gray-400 scale-95'">
                        <Icon name="ic:baseline-event-busy"
                            :class="selectedStatus === 'absent' ? 'h-12 w-12' : 'h-9 w-9'" />
                        <h1 :class="selectedStatus === 'absent' ? 'font-bold text-base' : 'text-sm'">Absent</h1>
                    </div>
                    <!-- Status Note + Update Button -->
                    <div class="flex flex-col gap-4 px-5 pb-8 sm:px-20">
                        <div class="flex flex-col gap-1">
                            <label class="text-sm font-semibold text-gray-600">
                                Optional Note
                            </label>
                            <textarea v-model="statusNote" maxlength="200" rows="3"
                                placeholder="e.g. Available after 2pm, check email first..." class="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm
             text-gray-700 resize-none focus:outline-none focus:ring-2
             focus:ring-[#1B6D24]/40 transition" />
                            <span class="text-xs text-gray-400 text-right">
                                {{ statusNote.length }}/200
                            </span>
                        </div>

                        <button @click="updateStatus" :disabled="isUpdating" class="self-end flex items-center gap-2 rounded-xl px-6 py-3 text-sm
           font-semibold text-white transition-all duration-200
           bg-[#1B6D24] hover:bg-[#155720] disabled:opacity-50
           disabled:cursor-not-allowed shadow-sm hover:shadow-md">
                            <Icon :name="isUpdating
                                ? 'ic:baseline-hourglass-empty'
                                : 'ic:baseline-check'" class="h-4 w-4" :class="{ 'animate-spin': isUpdating }" />
                            {{ isUpdating ? 'Updating...' : 'Update Status' }}
                        </button>

                        <!-- Feedback message -->
                        <p v-if="updateMessage" class="text-sm font-medium" :class="updateMessage.includes('successfully')
                            ? 'text-[#1B6D24]'
                            : 'text-red-600'">
                            {{ updateMessage }}
                        </p>
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
    room: authStore.user?.officeLocation || '—',
    status: authStore.user?.status || 'available',
}))

const selectedStatus = ref(authStore.user?.status || 'available')

// Add below selectedStatus ref
const statusNote = ref(authStore.user?.statusNote || '')
const isUpdating = ref(false)
const updateMessage = ref('')

const updateStatus = async () => {
    isUpdating.value = true
    updateMessage.value = ''

    const token = authStore.token

    try {
        const data = await $fetch('/api/user/status', {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: {
                status: selectedStatus.value,
                statusNote: statusNote.value,
            },
        })

        // Sync the store with the updated user
        authStore.user = data.user
        updateMessage.value = 'Status updated successfully!'
    } catch (err) {
        console.error('Update failed:', err)
        updateMessage.value = err?.data?.statusMessage || 'Failed to update status.'
    } finally {
        isUpdating.value = false
    }
}

const statusLabel = computed(() => {
    const map = {
        available: 'Available',
        busy: 'Busy',
        virtual_only: 'Virtual Only',
        on_leave: 'On Leave',
        absent: 'Absent',
    }
    return map[authStore.user?.status] || 'Available'
})

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