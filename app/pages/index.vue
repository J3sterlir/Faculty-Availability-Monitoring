<template>
    <div class="font-(family-name:--font-dm-sans)">
        <nav
            class="bg-[#001E40] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10 border-t-0 border-l-0 border-r-0 border-b sticky top-0 z-50 backdrop-blur-xs">
            <div class="mx-auto w-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="absolute inset-y-0 right-0 flex items-center sm:hidden pr-2">
                        <!-- Mobile login button -->
                        <NuxtLink to="/login" class="bg-white px-3 py-2 text-sm font-semibold text-[#001E40]">
                            Log in
                        </NuxtLink>
                    </div>
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
                        <div class="flex shrink-0 items-center">
                            <!--<img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" class="h-8 w-auto" />-->
                        </div>
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                <!-- Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" -->
                                <NuxtLink to="/login" class="bg-white px-3 py-2 text-sm font-semibold text-[#001E40]">
                                    Log in
                                </NuxtLink>
                            </div>
                        </div>
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
                                available</h1>
                            <h1 class="text-base sm:text-lg font-normal text-[#001E40]">Stop sending messages asking if professors are
                                in their offices. Professor Availability shows real-time status with a simple
                                color-coded system that saves time for everyone.</h1>
                        </div>

                    </div>
                    <div class="w-auto max-h-fit justify-end flex flex-col">
                        <div class="m-6 sm:m-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-fit h-fit row-span-1">
                            <NuxtLink to="/about"
                                class="border row-span-1 text-center text-white bg-[#001E40] p-4 hover:text-black hover:bg-white">
                                View Dashboard</NuxtLink>
                            <NuxtLink to="/about"
                                class="border row-span-1 text-center text-[#001E40] bg-white p-4 hover:text-blue-700">
                                Learn More</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end lg:justify-end">
                    <img src="https://images.unsplash.com/photo-1577412647305-991150c7d163" alt="Hero Image"
                        class="w-full lg:w-[75%] h-64 sm:h-80 lg:h-full object-cover shadow-md" />
                </div>

            </div>

        </div>
    </div>
</template>