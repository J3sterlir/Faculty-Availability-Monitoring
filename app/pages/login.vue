<template>
    <div class="font-(family-name:--font-dm-sans)">
        <div class="flex items-center justify-center min-h-dvh w-full px-4 py-8"
            style="background: #F9F9FF; background: linear-gradient(309deg, rgba(249, 249, 255, 1) 100%, rgba(240, 244, 250, 1) 100%);">
            <div class="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-lg shadow-lg bg-white md:grid-cols-2">
                <div class="flex flex-col justify-center px-6 py-8 sm:px-10">
                    <form action="" class="flex flex-col justify-center">
                        <h1 class="mb-4 text-3xl font-bold text-[#001E40]">Login</h1>
                        <hr class="mb-4 border-gray-300 border-dashed">
                        <h3 class="text-lg font-medium text-gray-900">Welcome back!</h3>
                        <h6 class="mb-5 text-md text-gray-500">Sign in to check professor schedules.</h6>
                        <div class="mb-4">
                            <label for="email" class=" mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input type="email" id="email" name="email"
                                class="border border-gray-300 bg-[#E2E8F8] rounded-md p-2 w-full">
                        </div>
                        <div class="mb-4">
                            <label for="password" class=" mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" id="password" name="password"
                                class="border border-gray-300 bg-[#E2E8F8] rounded-md p-2 w-full mb-1">
                            <a href="/login" class="text-sm text-[#001E40] hover:text-[#001E40]/90"><u>Forget password</u></a>
                        </div>
                        <div class="mb-4">
                            <label class="flex items-center text-sm">
                                <input type="checkbox" class="mr-2">
                                Remember me
                            </label>
                        </div>
                        <div>
                            <button type="submit"
                                class="w-full rounded-4xl bg-[#001E40] px-4 py-3 text-sm font-semibold text-white hover:bg-[#001E40]/90">
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>

                <div class="hidden md:flex items-stretch">
                    <img src="../assets/img/4PIXART.jpg" alt="Hero Image" class="h-full w-full object-cover" />
                </div>
            </div>
        </div>
    </div>
</template>