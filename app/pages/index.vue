<template>
    <div class="font-(family-name:--font-dm-sans) bg-white scroll-smooth">
        <nav
            class="bg-[#001E40] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 border-t-0 border-l-0 border-r-0 border-b sticky top-0 z-50 backdrop-blur-xs">
            <div class="mx-auto w-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">

                    <!-- Logo (left) -->
                    <div class="flex shrink-0 items-center">
                        <NuxtLink to="/" class="text-white font-bold text-lg tracking-tight">
                            Faculty Availability Hub
                        </NuxtLink>
                    </div>

                    <!-- Desktop nav (right) -->
                    <div class="hidden sm:flex sm:items-center sm:gap-3">
                        <NuxtLink to="/"
                            class="px-4 py-2 rounded-full text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                            active-class="bg-[#3D3BF3]">
                            Home
                        </NuxtLink>
                        <NuxtLink to="#features"
                            class="px-4 py-2 rounded-full text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                            Features
                        </NuxtLink>
                        <a href="#about"
                            class="px-4 py-2 rounded-full text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                            About
                        </a>
                        <div class="w-px h-5 bg-white/20 mx-1"></div>
                        <NuxtLink to="/login"
                            class="bg-white px-3 py-2 text-sm font-semibold text-[#001E40] hover:bg-white/90 transition-colors">
                            Faculty Login
                        </NuxtLink>
                        <NuxtLink to="/register"
                            class="border border-white px-3 py-2 text-sm font-semibold text-white hover:bg-white hover:text-[#001E40]">
                            Faculty Register
                        </NuxtLink>
                    </div>

                    <!-- Mobile nav (right) -->
                    <div class="flex items-center gap-2 sm:hidden">
                        <NuxtLink to="/"
                            class="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="#features"
                            class="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="/login"
                            class="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="/register"
                            class="border border-white px-3 py-2 text-sm font-semibold text-white hover:bg-white hover:text-[#001E40]">
                            Faculty Register
                        </NuxtLink>
                    </div>

                </div>
            </div>
        </nav>

        <div class="border border-[#001E40] p-0 m-auto mt-6 w-11/12 max-w-6xl sm:mt-10">
            <div class="grid grid-cols-1 lg:grid-cols-2">
                <div class="w-full">
                    <div class="justify-center flex flex-col">
                        <div class="mb-0 m-6 sm:m-10">
                            <h1 class="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#001E40] mb-3">Know when your
                                professor is actually
                                available with FacHub</h1>
                            <h1 class="text-base sm:text-lg font-normal text-[#001E40]">Stop sending messages asking if
                                professors are
                                in their offices. Professor Availability shows real-time status with a simple
                                color-coded system that saves time for everyone.</h1>
                        </div>
                    </div>

                    <div class="w-auto max-h-fit justify-end flex flex-col">
                        <div class="m-6 sm:m-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-fit h-fit row-span-1">
                            <NuxtLink to="/Student"
                                class="border row-span-1 text-center text-white bg-[#001E40] p-4 hover:text-black hover:bg-white">
                                View Availability Board</NuxtLink>
                            <a href="#features"
                                class="border row-span-1 text-center text-[#001E40] bg-white p-4 hover:text-blue-700">
                                Learn More</a>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end lg:justify-end">
                    <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163" alt="Hero Image"
                        class="w-full lg:w-[75%] h-64 sm:h-80 lg:h-full object-cover shadow-md" />
                </div>
            </div>
        </div>

        <!-- Five colors section -->
        <div class="p-0 m-auto h-fit mt-6 mb-30 w-11/12 max-w-6xl sm:mt-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

                <!-- Left: text + color badges -->
                <div class="flex flex-col gap-6">
                    <div class="flex flex-col gap-4">
                        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001E40] leading-tight">
                            Five colors tell you everything you need to know
                        </h1>
                        <p class="text-base sm:text-lg font-normal text-[#001E40]/70">
                            No more guessing if your professor is in. A glance at the board tells you exactly where they
                            stand.
                        </p>
                    </div>

                    <!-- Color badges -->
                    <div class="flex flex-col gap-3">
                        <div
                            class="flex items-center gap-3 border border-gray-100 rounded-xl px-4 py-3 bg-white shadow-sm">
                            <div class="h-3 w-3 rounded-full bg-[#1B6D24] shrink-0"></div>
                            <span class="text-sm font-semibold text-[#1B6D24] w-28">Available</span>
                            <span class="text-sm text-gray-400">In office, ready to meet</span>
                        </div>
                        <div
                            class="flex items-center gap-3 border border-gray-100 rounded-xl px-4 py-3 bg-white shadow-sm">
                            <div class="h-3 w-3 rounded-full bg-[#BA1A1A] shrink-0"></div>
                            <span class="text-sm font-semibold text-[#BA1A1A] w-28">Busy</span>
                            <span class="text-sm text-gray-400">On campus but occupied</span>
                        </div>
                        <div
                            class="flex items-center gap-3 border border-gray-100 rounded-xl px-4 py-3 bg-white shadow-sm">
                            <div class="h-3 w-3 rounded-full bg-blue-600 shrink-0"></div>
                            <span class="text-sm font-semibold text-blue-600 w-28">Virtual Only</span>
                            <span class="text-sm text-gray-400">Online meetings only</span>
                        </div>
                        <div
                            class="flex items-center gap-3 border border-gray-100 rounded-xl px-4 py-3 bg-white shadow-sm">
                            <div class="h-3 w-3 rounded-full bg-amber-600 shrink-0"></div>
                            <span class="text-sm font-semibold text-amber-600 w-28">On Leave</span>
                            <span class="text-sm text-gray-400">Away from campus</span>
                        </div>
                        <div
                            class="flex items-center gap-3 border border-gray-100 rounded-xl px-4 py-3 bg-white shadow-sm">
                            <div class="h-3 w-3 rounded-full bg-gray-400 shrink-0"></div>
                            <span class="text-sm font-semibold text-gray-500 w-28">Absent</span>
                            <span class="text-sm text-gray-400">Not available today</span>
                        </div>
                    </div>
                </div>

                <!-- Right: image -->
                <div class="rounded-xl overflow-hidden shadow-md aspect-[4/3]">
                    <img src="https://images.unsplash.com/photo-1537202108838-e7072bad1927?w=800&q=80"
                        alt="Campus library" class="w-full h-full object-cover" />
                </div>

            </div>
        </div>
        <section id="features" class="scroll-mt-10"></section>
        <div class="p-11"
            style="background: #c7cdff;
            background: radial-gradient(circle, rgba(199, 205, 255, 1) 0%, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 1) 100%);">
            <div class="flex flex-col gap-3 justify-center items-center mb-6">
                <h6 class="font-semibold">Features</h6>
                <h4 class="text-[2.3rem] font-bold">Everything built in</h4>
                <h3 class="font-light">The platform handles what matters most to students and professors alike.</h3>
            </div>
            <div class="">

            </div>
            <div class="flex flex-col justify-center items-center p-0 m-auto w-11/12 max-w-6xl sm:mt-10">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                    <!-- Card 1 - tall -->
                    <div class="bg-white border flex flex-col gap-5 p-8 lg:row-span-2">
                        <div class="h-12 w-12 rounded-full bg-[#001E40]/10 flex items-center justify-center">
                            <Icon name="ic:baseline-bolt" class="h-6 w-6 text-[#001E40]" />
                        </div>
                        <h1 class="font-semibold text-sm text-[#001E40]/60 uppercase tracking-wide">Real-time</h1>
                        <h4 class="font-bold text-[1.90rem] leading-tight text-[#001E40]">Status updates happen
                            instantly</h4>
                        <p class="font-light text-gray-500">When a professor changes their status, every student on
                            campus sees it right away. No refresh needed.</p>
                    </div>

                    <!-- Card 2 -->
                    <div class="bg-white border p-6 gap-4 flex flex-col">
                        <Icon name="material-symbols:history-2-rounded" class="h-10 w-10 text-[#001E40]" />
                        <h4 class="font-bold text-[1.60rem] leading-tight text-[#001E40]">See when they last updated
                        </h4>
                        <p class="font-light text-gray-500 text-sm">Timestamps show exactly when a status was last
                            changed.</p>
                    </div>

                    <!-- Card 3 - tall -->
                    <div class="bg-white border flex flex-col gap-5 p-8 lg:row-span-2">
                        <div class="h-12 w-12 rounded-full bg-[#001E40]/10 flex items-center justify-center">
                            <Icon name="ic:outline-video-chat" class="h-6 w-6 text-[#001E40]" />
                        </div>
                        <h1 class="font-semibold text-sm text-[#001E40]/60 uppercase tracking-wide">Virtual</h1>
                        <h4 class="font-bold text-[1.90rem] leading-tight text-[#001E40]">Remote and on-campus, all in
                            one place</h4>
                        <p class="font-light text-gray-500">Know if a professor is available online or in-person before
                            you head over.</p>
                    </div>

                    <!-- Card 4 -->
                    <div class="bg-white border p-6 gap-4 flex flex-col">
                        <Icon name="ic:baseline-check-circle-outline" class="h-10 w-10 text-[#1B6D24]" />
                        <h4 class="font-bold text-[1.60rem] leading-tight text-[#001E40]">Five clear status types</h4>
                        <p class="font-light text-gray-500 text-sm">Available, Busy, Virtual Only, On Leave, or Absent —
                            no ambiguity.</p>
                    </div>

                    <!-- Card 5 -->
                    <div class="bg-white border p-6 gap-4 flex flex-col">
                        <Icon name="ic:baseline-lock" class="h-10 w-10 text-[#001E40]" />
                        <h4 class="font-bold text-[1.60rem] leading-tight text-[#001E40]">Faculty-only controls</h4>
                        <p class="font-light text-gray-500 text-sm">Only verified faculty can update their own status.
                            Students get a read-only view.</p>
                    </div>

                    <!-- Card 6 -->
                    <div class="bg-white border p-6 gap-4 flex flex-col">
                        <Icon name="ic:baseline-search" class="h-10 w-10 text-[#001E40]" />
                        <h4 class="font-bold text-[1.60rem] leading-tight text-[#001E40]">Filter by department</h4>
                        <p class="font-light text-gray-500 text-sm">Students can narrow down the board to their specific
                            college or department.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <section id="about" class="scroll-mt-16"></section>
    <footer class="bg-[#001E40] p-10 text-center text-white h-fit flex flex-col justify-between">
        <div class="flex flex-row p-6 justify-between">
            <div class="flex flex-col text-start gap-3">
                <h1 class="font-bold text-lg mb-5">Faculty Availability Hub</h1>
                <p class="text-sm text-gray-300 font-bold">Address</p>
                <p class="text-sm text-gray-300 mb-5">Ateneo Ave, Naga City, 4400 Camarines Sur</p>
                <p class="text-sm text-gray-300 font-bold">Email</p>
                <p class="text-sm text-gray-300">info@facultyavailabilityhub.edu</p>
            </div>

            <div class="flex flex-col text-end gap-3">
                <div class="grid grid-cols-2 gap-10">
                    <div class="flex flex-col text-start gap-3">
                        <h1 class="font-bold text-lg mb-2">Quick Links</h1>
                        <NuxtLink to="#" class="text-sm text-gray-300 hover:text-white">Home</NuxtLink>
                        <NuxtLink to="#login" class="text-sm text-gray-300 hover:text-white">Login</NuxtLink>
                        <NuxtLink to="#" class="text-sm text-gray-300 hover:text-white">Dashboard</NuxtLink>
                    </div>
                    <div class="flex flex-col text-start gap-3">
                        <h1 class="font-bold text-lg mb-2 grow"></h1>
                        <NuxtLink to="#" class="text-sm text-gray-300 hover:text-white">Link1</NuxtLink>
                        <NuxtLink to="#" class="text-sm text-gray-300 hover:text-white">Link2</NuxtLink>
                        <NuxtLink to="#" class="text-sm text-gray-300 hover:text-white">Link3</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <hr class="m-1 mt-5">
        <div class="flex flex-row justify-between mt-10">
            <h1 class="text-md text-start text-gray-300 mb-2"> &copy; 2026 Faculty Availability Hub. All rights
                reserved.</h1>
            <div class="flex flex-row gap-7">
                <a href="#" class="text-md text-start text-gray-300 hover:text-white mb-2 underline">Privacy
                    Policy</a>
                <a href="#" class="text-md text-start text-gray-300 hover:text-white mb-2 underline">Terms of
                    Service</a>
                <a href="#" class="text-md text-start text-gray-300 hover:text-white mb-2 underline">Cookies
                    Settings</a>
            </div>
        </div>
    </footer>
</template>