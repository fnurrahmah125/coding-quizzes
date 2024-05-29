<script setup lang="ts">
import { useCategoriesStore } from "~/stores/categories";

const isShowMenuMobile = ref(false);
const categoriesStore = useCategoriesStore();
const { categories } = storeToRefs(categoriesStore);

categoriesStore.getAllCategories();
</script>

<template>
  <div id="header" class="bg-white shadow-md">
    <nav
      id="navbar"
      class="relative mx-auto flex max-w-[1900px] items-center justify-between p-4 md:p-0 md:px-4 lg:w-[90%]"
    >
      <div class="flex items-center gap-2">
        <NuxtLink
          to="/"
          class="border-gray-300 pr-5 text-xl font-semibold md:border-r"
          ><img src="/images/logo.png" class="mr-2 inline-block h-10" />Coding
          Quizzes</NuxtLink
        >
        <div class="group hidden md:block">
          <a href="#" class="inline-block px-4 py-5 text-lg">Categories</a>
          <div
            class="absolute inset-0 left-[16rem] top-[4.28rem] z-10 h-[32rem] max-w-72 scale-0 overflow-y-auto rounded-b-md bg-white drop-shadow-xl transition duration-100 group-hover:scale-100"
          >
            <ul class="py-4">
              <li v-for="category in categories" :key="category.id" class="">
                <NuxtLink
                  :to="`/categories/${category.name.toLowerCase()}`"
                  class="block cursor-pointer px-6 py-2.5 text-lg font-light text-neutral-700 hover:bg-red-800 hover:text-white"
                  >{{ category?.name }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="hidden md:block">
        <NuxtLink
          to="/login"
          class="hidden cursor-pointer rounded-md border border-gray-400 px-5 py-2 text-lg transition duration-300 ease-out hover:bg-gray-100"
          >Login</NuxtLink
        >
        <NuxtLink
          to="/register"
          class="ml-3 hidden cursor-pointer rounded-md bg-red-800 px-5 py-2 text-lg text-white transition duration-300 ease-out hover:bg-red-900"
          >Register</NuxtLink
        >
        <div class="group relative">
          <img
            src="https://cdn.vectorstock.com/i/500p/86/76/cute-black-cat-cartoon-character-vector-47268676.jpg"
            alt="profile"
            class="h-12 w-12 cursor-pointer rounded-full border-2 border-red-800 object-cover"
          />
          <div
            id="profile-menu"
            class="absolute right-0 top-[3.65rem] w-48 scale-0 rounded-sm bg-white shadow-md transition duration-100 group-hover:scale-100"
          >
            <ul>
              <li class="border-b border-gray-200/50">
                <NuxtLink
                  to="/user-name"
                  class="inline-block w-full px-4 py-2.5 hover:bg-red-800 hover:text-white"
                  ><i class="ri-user-3-line mr-1 text-lg"></i> Your
                  profile</NuxtLink
                >
              </li>
              <li class="border-b border-gray-200/50">
                <NuxtLink
                  to="/settings/profile"
                  class="inline-block w-full px-4 py-2.5 hover:bg-red-800 hover:text-white"
                  ><i class="ri-settings-2-line mr-1 text-lg"></i>
                  Settings</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/"
                  class="inline-block w-full px-4 py-2.5 hover:bg-red-800 hover:text-white"
                  ><i class="ri-logout-circle-r-line mr-1 text-lg"></i>
                  Logout</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <button
        id="toggle-menu"
        @click="isShowMenuMobile = !isShowMenuMobile"
        class="md:hidden"
      >
        <i v-if="isShowMenuMobile" class="ri-close-fill text-3xl"></i>
        <i v-else class="ri-menu-line text-3xl"></i>
      </button>
    </nav>

    <div
      id="overlay-menu"
      class="fixed inset-0 top-16 z-30 bg-[rgba(31,41,55,0.7)] transition duration-300 ease-in-out md:hidden"
      :class="
        isShowMenuMobile
          ? 'translate-x-0'
          : 'translate-x-[120%] bg-[rgba(31,41,55,0)]'
      "
    ></div>

    <div
      v-if="isShowMenuMobile"
      id="mobile-menu"
      class="fixed bottom-4 left-4 right-4 top-[5.5rem] z-40 overflow-y-auto rounded-md bg-white px-4 py-4 md:hidden"
    >
      <NuxtLink
        to="/user-name"
        class="flex w-full items-center gap-2 border-b pb-4 hover:text-red-800"
        @click="isShowMenuMobile = !isShowMenuMobile"
      >
        <img
          src="https://cdn.vectorstock.com/i/500p/86/76/cute-black-cat-cartoon-character-vector-47268676.jpg"
          alt="profile"
          class="h-10 w-10 rounded-full border-2 border-red-800 object-cover"
        />
        <span class="text-xl font-medium">Username</span>
      </NuxtLink>
      <h4 class="mt-2.5 text-lg font-medium">Categories</h4>
      <ul class="mb-8 border-b">
        <li v-for="category in categories" :key="category?.id" class="">
          <NuxtLink
            class="block cursor-pointer px-4 py-2.5 text-lg font-light text-neutral-700 hover:text-red-800"
            @click="isShowMenuMobile = !isShowMenuMobile"
            >{{ category?.name }}</NuxtLink
          >
        </li>
      </ul>

      <NuxtLink
        to="/login"
        class="mb-4 block w-full rounded-md border border-gray-400 px-5 py-2 text-center hover:bg-gray-100"
        @click="isShowMenuMobile = !isShowMenuMobile"
      >
        Login
      </NuxtLink>
      <NuxtLink
        to="/register"
        class="block w-full rounded-md border bg-red-800 px-5 py-2 text-center text-white hover:bg-red-900"
        @click="isShowMenuMobile = !isShowMenuMobile"
      >
        Register
      </NuxtLink>
    </div>
  </div>
</template>
~/stores/user
