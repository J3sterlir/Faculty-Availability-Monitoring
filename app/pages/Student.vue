<template>
  <div class="font-(family-name:--font-dm-sans) bg-[#faf9ff] min-h-dvh">
    <!-- Navbar (kiosk mode: no profile/settings) -->
    <nav class="bg-[#F0F2FE] flex flex-row p-6 pl-20 pr-20 justify-between sticky top-0 z-10 shadow-md">
      <div class="flex flex-row gap-4 items-center">
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
          <input type="text" placeholder="Search professors..."
            class="bg-[#E2E8F8] text-[#151C27] placeholder:text-[#43474F]/50 pl-12 pr-20 p-0.5 border border-[#DCE2F3] rounded-full focus:outline-none focus:ring-2"
            aria-label="Search professors" />
        </div>
        <!-- Removed account-circle and settings buttons -->
      </div>
    </nav>

    <!-- Filters (department + availability) -->
    <div class="m-40 mt-20 mb-0">
      <div class="flex flex-row gap-20">
        <div class="flex flex-col">
          <h1 class="text-[#43474F] font-semibold">Department</h1>
          <div class="relative w-[130%] mt-2">
            <select
              class="block w-full appearance-none rounded bg-[#F0F3FF] text-[#151C27] px-4 py-2 pr-8 leading-tight cursor-pointer focus:outline-none">
              <option selected>All Departments</option>
              <option>Computer Studies</option>
              <option>Business & Tech</option>
              <option>Engineering</option>
              <option>Arts & Sciences</option>
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
            <button
              class="bg-[#F0F3FF] text-black font-semibold px-3 py-1.5 rounded-md hover:bg-[#001E40] hover:text-[#F0F3FF] focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
              All
            </button>
            <button
              class="bg-[#F0F3FF] text-black font-semibold px-3 py-1.5 rounded-md hover:bg-[#001E40] hover:text-[#F0F3FF] focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
              Available Now
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Professor Cards Grid -->
    <div class="flex flex-row m-40 mt-20 mb-0 items-start">
      <div class="pb-11 w-full">
        <div class="flex flex-row flex-wrap gap-7 w-full">
          <div v-for="prof in professors" :key="prof.name"
            class="bg-[#FFFFFF] p-5 rounded-xl flex flex-col gap-4 w-64 shadow-xl transition-transform hover:scale-105">
            <div>
              <img :src="prof.avatar" class="rounded-xl w-16 h-16 object-cover" alt="">
            </div>
            <div class="flex flex-col">
              <h1 class="font-bold text-lg">{{ prof.name }}</h1>
              <p class="text-[#43474F]/70 font-semibold">{{ prof.department }}</p>
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex items-center p-2.5 py-1 rounded-full w-max" :class="prof.badgeClass">
                <h1 class="font-semibold" :class="prof.textClass">{{ prof.status }}</h1>
              </div>
              <hr class="border-[#C3C6D1]/50">
              <div class="flex flex-row justify-between items-center">
                <div class="flex flex-row items-center gap-1">
                  <Icon name="ic:sharp-access-time" class="h-5 w-5 text-[#737780]" />
                  <p class="text-[0.8rem] text-[#737780]">{{ prof.lastSeen }}</p>
                </div>
                <p class="text-[#003366] font-semibold text-sm">{{ prof.note }}</p>
              </div>
            </div>
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
import { ref } from 'vue'

// Professor data with names: Martinez, Aguilar, Lastimosa, Garay, Singson
const professors = ref([
  {
    name: 'Joshua Martinez',
    department: 'Computer Studies',
    status: 'Available',
    badgeClass: 'bg-[#22C55E]/10',
    textClass: 'text-[#22C55E]',
    lastSeen: 'Just now',
    note: 'RM 402',
    avatar: 'https://placehold.co/65?text=JM'
  },
  {
    name: 'Ma. Theresa Aguilar',
    department: 'Arts & Sciences',
    status: 'Busy',
    badgeClass: 'bg-[#F97316]/10',
    textClass: 'text-[#F97316]',
    lastSeen: '2 mins ago',
    note: 'In meeting',
    avatar: 'https://placehold.co/65?text=MA'
  },
  {
    name: 'Ian Lastimosa',
    department: 'Engineering',
    status: 'Virtual only',
    badgeClass: 'bg-[#3B82F6]/10',
    textClass: 'text-[#3B82F6]',
    lastSeen: '45 mins ago',
    note: 'Zoom link',
    avatar: 'https://placehold.co/65?text=IL'
  },
  {
    name: 'Raphael Garay',
    department: 'Engineering',
    status: 'On leave',
    badgeClass: 'bg-[#6B7280]/10',
    textClass: 'text-[#6B7280]',
    lastSeen: 'Oct 20-24',
    note: 'Boracay',
    avatar: 'https://placehold.co/65?text=RG'
  },
  {
    name: 'Kevin Singson',
    department: 'Computer Studies',
    status: 'Absent',
    badgeClass: 'bg-[#EF4444]/10',
    textClass: 'text-[#EF4444]',
    lastSeen: '1 hour ago',
    note: 'Sick leave',
    avatar: 'https://placehold.co/65?text=KS'
  }
])
</script>