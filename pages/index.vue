<script setup lang="ts">
import { content } from "~/composables/constants/content";
import { features } from "~/composables/constants/features";
import { stack } from "~/composables/constants/stack";
</script>

<template>
  <div class="min-h-screen">
    <div
      class="mx-auto grid h-[35rem] max-w-[1900px] place-content-center px-8 md:my-8 lg:h-[38rem] lg:w-[90%]"
    >
      <h1
        class="scale-up-bottom relative max-w-lg text-5xl font-bold leading-[3.75rem] lg:max-w-3xl lg:text-7xl lg:leading-[5.3rem]"
      >
        Sharpen your
        <span class="border-b-[8px] border-red-800">coding skills</span>
        with fun and challenging quizzes !
        <span
          class="absolute -left-[20px] -top-[24px] -z-10 h-24 w-24 rounded-full bg-yellow-400 lg:h-28 lg:w-28"
        ></span>
      </h1>
    </div>
    <section class="bg-yellow-400 py-[3rem] lg:py-[5rem]">
      <div class="mx-auto max-w-[1900px] px-8 lg:w-[90%]">
        <h2
          class="relative mb-14 text-3xl font-bold underline decoration-red-800 decoration-wavy decoration-4 underline-offset-8"
        >
          Why Coding Quizzes?
        </h2>
        <div class="grid gap-4 md:grid-cols-2 lg:gap-5 xl:grid-cols-4">
          <div
            v-for="item in content"
            :key="item.id"
            class="rounded-xl bg-white p-8 drop-shadow-md"
          >
            <i :class="item.icon"></i>
            <h3 class="mb-2 text-2xl font-bold">{{ item.heading }}</h3>
            <p class="line-clamp-6 text-[1.1rem] text-gray-500">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-yellow-50 py-[3rem] lg:py-[5rem]">
      <div class="mx-auto max-w-[1900px] px-8 lg:w-[90%]">
        <div class="mx-auto lg:flex lg:gap-8">
          <div
            class="hidden basis-1/2 self-center py-10 text-[5.6rem] font-bold leading-[6.5rem] lg:block xl:px-8"
          >
            eat();<br /><span class="text-[6rem] text-red-800">sleep();</span
            ><br />code();<br /><span class="text-[6rem] text-red-800"
              >repeat();</span
            >
          </div>
          <div class="xl:mx-10">
            <h2
              class="relative mb-14 text-3xl font-bold underline decoration-red-800 decoration-wavy decoration-4 underline-offset-8"
            >
              Features
            </h2>
            <div
              v-for="item in features"
              :key="item.id"
              class="relative mx-5 pb-8 pl-8 after:absolute after:inset-y-1 after:left-[3px] after:w-[2px] after:bg-red-800 after:content-[''] after:last:bg-yellow-50 lg:after:-left-[1.4rem]"
            >
              <h3 class="relative mb-2 px-2 text-xl font-bold lg:text-2xl">
                <span
                  class="absolute -left-[3.3rem] -top-2 z-10 rounded-full border-2 border-red-800 bg-yellow-50 px-2.5 py-2 font-medium shadow-md lg:-left-[5rem]"
                  >0{{ item.id }}</span
                >{{ item.heading }}
              </h3>
              <ul
                class="list-disc pl-7 text-lg leading-relaxed text-neutral-600"
              >
                <li v-for="list in item.content" :key="list">
                  {{ list }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="scroller mx-auto max-w-5xl overflow-hidden py-8">
          <div
            class="scroller-inner flex w-max flex-nowrap justify-center gap-4"
          >
            <div
              v-for="item in stack"
              :key="item.id"
              class="rounded-md bg-white px-4 py-2 drop-shadow-md"
            >
              <img :src="item.image" :alt="item.alt" class="h-14" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-yellow-400 px-4 py-[3rem] text-center lg:py-[5rem]">
      <h2 class="mb-4 text-4xl font-bold">Get Started Today!</h2>
      <p class="mb-7 text-lg text-neutral-600 lg:text-xl">
        Join Coding Quizzes now and start your journey to becoming a coding pro!
      </p>
      <button
        class="rounded-md bg-red-800 px-6 py-3 text-xl font-semibold text-white drop-shadow-md hover:bg-red-900"
      >
        Sign Up
      </button>
    </section>
  </div>
</template>
