<template>
    <div class="font-(family-name:--font-dm-sans) bg-[#faf9ff] min-h-dvh scroll-smooth">
        <nav class="bg-[#F0F2FE] flex flex-row p-6 pl-20 pr-20 justify-between sticky top-0 z-10 shadow-md">
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
                <!-- 
                <div class="relative flex">
                    <Icon name="material-symbols:search"
                        class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#43474F]/60"
                        aria-hidden="true" />
                    <input type="text" placeholder="Search professors..."
                        class="bg-[#E2E8F8] text-[#151C27] placeholder:text-[#43474F]/50 pl-12 pr-20 p-0.5 border border-[#DCE2F3] rounded-full focus:outline-none focus:ring-2"
                        aria-label="Search professors" />
                </div>
                -->
                <button class="text-[#151C27]/50 hover: flex flex-row items-center">
                    <Icon name="material-symbols:account-circle" class="h-6 w-6" />
                </button>
                <button class="text-[#151C27]/50 hover: flex flex-row items-center">
                    <Icon name="ic:baseline-settings" class="h-6 w-6" />
                </button>
            </div>
        </nav>

        <div class="flex flex-row m-30 mb-0">
            <div class="flex flex-col gap-2">
                <h1 class="text-4xl">Welcome Back, </h1>
                <p class="text-base">Manage your visibility and academic presence across the campus network.</p>
            </div>
        </div>
        <div class="p-11">
            <div class="flex flex-col m-30 mt-15 bg-white p-10 rounded-xl shadow-md h-full">
                <div class="flex flex-col">
                    <h1 class="text-xl font-bold">Set your status</h1>
                </div>
                <div class="flex flex-row flex-wrap gap-5 justify-between items-stretch p-10 pl-20 pr-20">
                    <div
                        class="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border border-[#1B6D24] bg-[#1B6D24]/10 p-4 px- text-center min-h-35">
                        <Icon name="ic:baseline-check-circle-outline" class="h-10 w-10" />
                        <h1>Available</h1>
                    </div>
                    <div
                        class="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border border-[#BA1A1A] bg-[#BA1A1A]/10 p-4 text-center min-h-35">
                        <Icon name="ic:baseline-block" class="h-10 w-10" />
                        <h1>Busy</h1>
                    </div>
                    <div
                        class="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border border-[#DCE2F3] bg-[#E2E8F8] p-4 text-center min-h-35">
                        <Icon name="ic:outline-video-chat" class="h-10 w-10" />
                        <h1>In a meeting</h1>
                    </div>
                    <div
                        class="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border border-[#DCE2F3] bg-[#E2E8F8] p-4 text-center min-h-35">
                        <Icon name="ic:baseline-flight-takeoff" class="h-10 w-10" />
                        <h1>On Leave</h1>
                    </div>
                    <div
                        class="flex flex-1 flex-col items-center justify-center gap-4 rounded-xl border border-[#DCE2F3] bg-[#E2E8F8] p-4 text-center min-h-35">
                        <Icon name="ic:baseline-event-busy" class="h-10 w-10" />
                        <h1>Absent</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="bg-[#F0F2FE] z-10 bottom-0">
        <div class="flex flex-row gap-4 items-center justify-center p-6">
            <h6 class="font-bold text-sm text-[#151C27]/50">© 2026 Faculty Availability Hub. All rights reserved.
            </h6>
        </div>
    </footer>
</template>