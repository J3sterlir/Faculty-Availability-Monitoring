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
                        <NuxtLink to="/about"
                            class="px-4 py-2 rounded-full text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                            About
                        </NuxtLink>
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

        <div class="p-0 m-auto h-fit mt-6 mb-30 w-11/12 max-w-6xl sm:mt-10">
            <div class="grid grid-cols-1 lg:grid-cols-2">
                <div class="w-full flex">
                    <div class="flex flex-col justify-center">
                        <div class="m-1 sm:m-1 flex flex-col gap-31">
                            <h1 class="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#001E40]">Five colors tell
                                you everything you need to know</h1>
                            <h1 class=" text-base sm:text-lg font-normal text-[#001E40] ">Green means available now.
                                Orange means busy but on campus. Blue is virtual only. Gray is on leave. Red is absent.
                                No confusion, no guessing.</h1>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end lg:justify-end">
                    <img src="https://images.unsplash.com/photo-1537202108838-e7072bad1927" alt="Hero Image"
                        class="w-full lg:w-[75%] h-fit sm:h-30 lg:h-92 object-cover shadow-md" />
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
            <div class="flex flex-col justify-center items-center p-0 m-auto w-11/12 max-w-6xl sm:mt-10"
                style="background: #c7cdff;
            background: radial-gradient(circle, rgba(199, 205, 255, 1) 0%, rgba(255, 255, 255, 1) 73%, rgba(255, 255, 255, 1) 100%);">
                <div class="grid grid-cols-3 grid-rows-2 gap-5">
                    <div class="bg-white text-black row-span-2 flex flex-col border">
                        <div class="bg-white text-black mb-1">
                            <img src="https://placehold.co/600x400" alt="">
                        </div>
                        <div class="m-6 gap-5 flex flex-col">
                            <h1 class="font-semibold">Real-time</h1>
                            <h4 class="font-bold text-[1.90rem] leading-tight">Status updates happen instantly</h4>
                            <h1 class="font-light">When a professor changes their status, you see it right away.</h1>
                        </div>
                    </div>
                    <div class="bg-white text-black row-span-1 border p-6 gap-5 flex flex-col">
                        <Icon name="material-symbols:history-2-rounded" class="h-10 w-10" />
                        <h1 class="font-bold text-[1.90rem] leading-tight">See when they last updated</h1>
                        <h1 class="font-light">When a professor changes their status, you see it right away.</h1>
                    </div>
                    <div class="bg-white text-black row-span-2 border">
                        <div class="bg-white text-black mb-1">
                            <img src="https://placehold.co/600x400" alt="">
                        </div>
                        <div class="m-6 gap-5 flex flex-col">
                            <h1 class="font-semibold">Real-time</h1>
                            <h4 class="font-bold text-[1.90rem] leading-tight">Status updates happen instantly</h4>
                            <h1 class="font-light">When a professor changes their status, you see it right away.</h1>
                        </div>
                    </div>
                    <div class="bg-white text-black row-span-2 border">
                        <div class="bg-white text-black mb-1">
                            <img src="https://placehold.co/600x400" alt="">
                        </div>
                        <div class="m-6 gap-5 flex flex-col">
                            <h1 class="font-semibold">Real-time</h1>
                            <h4 class="font-bold text-[1.90rem] leading-tight">Status updates happen instantly</h4>
                            <h1 class="font-light">When a professor changes their status, you see it right away.</h1>
                        </div>
                    </div>
                    <div class="bg-white text-black row-span-1 border p-6 gap-5 flex flex-col">
                        <Icon name="material-symbols:history-2-rounded" class="h-10 w-10" />
                        <h1 class="font-bold text-[1.90rem] leading-tight">See when they last updated</h1>
                        <h1 class="font-light">When a professor changes their status, you see it right away.</h1>
                    </div>
                    <div class="bg-white text-black row-span-1 border p-6 gap-5 flex flex-col">
                        <Icon name="material-symbols:history-2-rounded" class="h-10 w-10" />
                        <h1 class="font-bold text-[1.90rem] leading-tight">See when they last updated</h1>
                        <h1 class="font-light">When a professor changes their status, you see it right away.</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>

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