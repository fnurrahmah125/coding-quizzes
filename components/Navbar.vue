<script setup lang="ts">
import { category } from "~/composables/constants/category";

const isShowMenu = ref(false);
</script>

<template>
  <div id="header">
    <nav
      class="fixed z-10 flex w-full items-center justify-between bg-white p-4 shadow-md md:p-0 md:px-4"
    >
      <div class="flex items-center gap-2">
        <img src="/images/logo.png" class="h-10" />
        <a
          href="/"
          class="border-gray-300 pr-5 text-xl font-semibold md:border-r"
          >Coding Quizzes</a
        >
        <div class="group hidden md:block">
          <a href="#" class="inline-block px-4 py-5 text-lg">Categories</a>
          <div
            class="absolute inset-0 left-[16rem] top-[4.5rem] h-max max-w-72 scale-0 rounded-md bg-white drop-shadow-xl transition duration-100 group-hover:scale-100"
          >
            <ul class="py-4">
              <li v-for="(item, index) in category" :key="index" class="">
                <NuxtLink
                  class="block cursor-pointer px-6 py-2.5 text-lg font-light text-neutral-700 hover:bg-red-800 hover:text-white"
                  >{{ item.name }}</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="hidden md:block">
        <NuxtLink
          class="cursor-pointer rounded-md border border-gray-400 px-5 py-2 text-lg transition duration-300 ease-out hover:bg-gray-100"
          >Login</NuxtLink
        >
        <NuxtLink
          class="ml-3 cursor-pointer rounded-md bg-red-800 px-5 py-2 text-lg text-white transition duration-300 ease-out hover:bg-red-900"
          >Register</NuxtLink
        >
      </div>

      <button
        id="toggle-menu"
        @click="isShowMenu = !isShowMenu"
        class="md:hidden"
      >
        <i v-if="isShowMenu" class="ri-close-fill text-3xl"></i>
        <i v-else class="ri-menu-line text-3xl"></i>
      </button>
    </nav>

    <div
      id="overlay-menu"
      class="fixed inset-0 top-16 bg-[rgba(31,41,55,0.7)] transition duration-300 ease-in-out md:hidden"
      :class="
        isShowMenu
          ? '-translate-y-0'
          : '-translate-y-[120%] bg-[rgba(31,41,55,0)]'
      "
    ></div>

    <div
      v-if="isShowMenu"
      id="mobile-menu"
      class="fixed bottom-4 left-4 right-4 top-[5.5rem] overflow-y-auto rounded-md bg-white px-4 py-4 md:hidden"
    >
      <h4 class="text-lg font-medium">Categories</h4>
      <ul class="mb-8 border-b py-4">
        <li v-for="(item, index) in category" :key="index" class="">
          <NuxtLink
            class="block cursor-pointer px-4 py-2.5 text-lg font-light text-neutral-700 hover:text-red-800"
            >{{ item.name }}</NuxtLink
          >
        </li>
      </ul>

      <button
        class="mb-4 block w-full rounded-md border border-gray-400 px-5 py-2 hover:bg-gray-100"
      >
        Login
      </button>
      <button
        class="block w-full rounded-md border bg-red-800 px-5 py-2 text-white hover:bg-red-900"
      >
        Register
      </button>
    </div>
  </div>
</template>
