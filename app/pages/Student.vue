<template>
  <div class="font-(family-name:--font-dm-sans) bg-[#faf9ff] min-h-dvh">
    <!-- Navbar (kiosk mode: no profile/settings) -->
    <nav class="bg-[#F0F2FE] flex flex-row p-6 pl-20 pr-20 justify-between sticky top-0 z-10 shadow-md">
      <div class="flex flex-row gap-4 items-center">
        <NuxtLink to="/"
          class="flex items-center gap-2 text-sm font-semibold text-[#151C27]/60 hover:text-[#151C27] transition-colors">
          <Icon name="ic:baseline-arrow-back" class="h-4 w-4" />
          Home
        </NuxtLink>
        <h6 class="font-bold text-lg">Faculty Availability Hub</h6>
        <div class="h-full w-px bg-gray-400"></div>
        <div class="bg-[#DCE2F3] p-2 rounded-full flex flex-row gap-2 items-center">
          <div class="h-2 w-2 rounded-full bg-[#1B6D24] animate-pulse"></div>
          <h1 class="text-xs TEXT-[#151C27] font-semibold">LIVE UPDATES</h1>
        </div>
      </div>
      <div class="flex flex-row gap-4">
        <div class="relative flex">
          <Icon name="material-symbols:search"
            class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#43474F]/60"
            aria-hidden="true" />
          <input type="text" v-model="searchQuery" placeholder="Search professors..."
            class="bg-[#E2E8F8] text-[#151C27] placeholder:text-[#43474F]/50 pl-12 pr-20 p-0.5 border border-[#DCE2F3] rounded-full focus:outline-none focus:ring-2"
            aria-label="Search professors" />
        </div>
      </div>
    </nav>

    <!-- Filters (department + availability) -->
    <div class="m-40 mt-20 mb-0">
      <div class="flex flex-row gap-20">
        <div class="flex flex-col">
          <h1 class="text-[#43474F] font-semibold">Department</h1>
          <div class="relative w-[130%] mt-2">
            <select v-model="selectedDepartment"
              class="block w-full appearance-none rounded bg-[#F0F3FF] text-[#151C27] px-4 py-2 pr-8 leading-tight cursor-pointer focus:outline-none">
              <option v-for="dep in departments" :key="dep" :value="dep">{{ dep }}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <h1 class="text-[#43474F] font-semibold">Availability</h1>
          <div class="mt-2 flex items-center gap-3">
            <button @click="showAvailableOnly = false"
              class="font-semibold px-3 py-1.5 rounded-md cursor-pointer transition"
              :class="!showAvailableOnly ? 'bg-[#001E40] text-white' : 'bg-[#F0F3FF] text-black hover:bg-[#001E40] hover:text-white'">
              All
            </button>
            <button @click="showAvailableOnly = true"
              class="font-semibold px-3 py-1.5 rounded-md cursor-pointer transition"
              :class="showAvailableOnly ? 'bg-[#001E40] text-white' : 'bg-[#F0F3FF] text-black hover:bg-[#001E40] hover:text-white'">
              Available Now
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Professor Cards Grid (filtered) -->
    <div class="flex flex-row m-40 mt-20 mb-0 items-start">
      <div class="pb-11 w-full">
        <div class="flex flex-row flex-wrap gap-7 w-full">
          <div v-for="prof in filteredProfessors" :key="prof._id"
            class="bg-[#FFFFFF] p-5 rounded-xl flex flex-col gap-4 w-64 shadow-xl transition-transform hover:scale-105">
            <div>
              <img :src="avatarUrl(prof)" class="rounded-xl w-16 h-16 object-cover" alt="" />
            </div>
            <div class="flex flex-col">
              <h1 class="font-bold text-lg">{{ prof.name }}</h1>
              <p class="text-[#43474F]/70 font-semibold">{{ prof.department }}</p>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex items-center p-2.5 py-1 rounded-full w-max"
                :class="statusBadgeMap[prof.status] || 'bg-gray-100'">
                <h1 class="font-semibold" :class="statusTextMap[prof.status] || 'text-gray-500'">
                  {{ statusLabelMap[prof.status] || prof.status }}
                </h1>
              </div>
              <!-- Faculty Status Note -->
              <p v-if="prof.statusNote" class="text-xs text-[#43474F]/70 italic leading-snug">
                "{{ prof.statusNote }}"
              </p>
              <hr class="border-[#C3C6D1]/50">
              <div class="flex flex-row justify-between items-center">
                <div class="flex flex-row items-center gap-1">
                  <Icon name="ic:sharp-access-time" class="h-5 w-5 text-[#737780]" />
                  <p class="text-[0.8rem] text-[#737780]">{{ timeAgo(prof.statusUpdatedAt) }}</p>
                </div>
                <p class="text-[#003366] font-semibold text-sm">{{ prof.officeLocation || '—' }}</p>
              </div>
            </div>
          </div>
          <!-- Empty state -->
          <div v-if="filteredProfessors.length === 0" class="w-full text-center py-10 text-gray-500">
            No professors match the selected filters.
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer class="bg-[#F0F2FE] z-10 bottom-0">
    <div class="flex flex-row gap-4 items-center justify-center p-6">
      <h6 class="font-bold text-sm text-[#151C27]/50">© 2026 Faculty Availability Hub. All rights reserved.</h6>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const professors = ref([])
const searchQuery = ref('')
const selectedDepartment = ref('All Departments')
const showAvailableOnly = ref(false)

// Status display maps
const statusLabelMap = {
  available: 'Available',
  busy: 'Busy',
  virtual_only: 'Virtual only',
  on_leave: 'On leave',
  absent: 'Absent',
}

const statusBadgeMap = {
  available: 'bg-[#1B6D24]/10',
  busy: 'bg-[#BA1A1A]/10',
  virtual_only: 'bg-blue-500/10',
  on_leave: 'bg-orange-500/10',
  absent: 'bg-gray-400/10',
}

const statusTextMap = {
  available: 'text-[#1B6D24]',
  busy: 'text-[#BA1A1A]',
  virtual_only: 'text-blue-600',
  on_leave: 'text-orange-500',
  absent: 'text-gray-500',
}

// Format time since last update
function timeAgo(date) {
  if (!date) return 'Unknown'
  const diff = Math.floor((Date.now() - new Date(date)) / 1000)
  if (diff < 60) return 'Just now'
  if (diff < 3600) return `${Math.floor(diff / 60)} mins ago`
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`
  return new Date(date).toLocaleDateString()
}

// Avatar initials fallback
function avatarUrl(prof) {
  if (prof.profilePhoto) return prof.profilePhoto
  const initials = prof.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
  return `https://placehold.co/65?text=${initials}`
}

// Unique departments from fetched data
const departments = computed(() => {
  const deps = [...new Set(professors.value.map(p => p.department))].filter(Boolean).sort()
  return ['All Departments', ...deps]
})

const filteredProfessors = computed(() => {
  let list = professors.value

  if (selectedDepartment.value !== 'All Departments') {
    list = list.filter(p => p.department === selectedDepartment.value)
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim().toLowerCase()
    list = list.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.department.toLowerCase().includes(q)
    )
  }

  if (showAvailableOnly.value) {
    list = list.filter(p => p.status === 'available')
  }

  return list
})

onMounted(async () => {
  try {
    const res = await $fetch('/api/professors')
    professors.value = res.professors
  } catch (err) {
    console.error('Failed to fetch professors:', err)
  }
})
</script>