<template>
    <div class="font-(family-name:--font-dm-sans) bg-[#faf9ff] h-screen">
        <nav class="bg-[#F0F2FE] flex flex-row p-6 pl-20 pr-20 justify-between">
            <div class="flex flex-row gap-4 items-center">
                <h6 class="font-bold text-lg">Faculty Availability Hub</h6>
                <div class="h-full w-px bg-gray-400"></div>
                <div class="bg-[#DCE2F3] p-2 rounded-full flex flex-row gap-2 items-center">
                    <div class="h-2 w-2 rounded-full bg-[#1B6D24] animate-pulse">
                    </div>
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
                <button class="text-[#151C27]/50 hover: flex flex-row items-center">
                    <Icon name="material-symbols:account-circle" class="h-6 w-6" />
                </button>
                <button class="text-[#151C27]/50 hover: flex flex-row items-center">
                    <Icon name="ic:baseline-settings" class="h-6 w-6" />
                </button>
            </div>
        </nav>
        <div class="m-40 mt-20">
            <div class="flex flex-row gap-20">
                <div class="flex flex-col">
                    <h1 class="text-[#43474F] font-semibold">Department</h1>
                    <div class="relative w-[130%] mt-2">
                        <select
                            class="block w-full appearance-none rounded bg-[#F0F3FF] text-[#151C27] px-4 py-2 pr-8 leading-tight focus:outline-none">
                            <option selected>Department</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                        </select>

                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
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
                        <button class="bg-[#F0F3FF] text-black font-semibold px-3 py-1.5 rounded-md hover:bg-[#001E40] hover:text-[#F0F3FF] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                All
                        </button>
                        <button class="bg-[#F0F3FF] text-black font-semibold px-3 py-1.5 rounded-md hover:bg-[#001E40] hover:text-[#F0F3FF] focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Available Now
                        </button>
                    </div>
                    
                </div>

            </div>
        </div>

    </div>
</template>