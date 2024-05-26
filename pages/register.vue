<script setup lang="ts">
definePageMeta({
  layout: "auth",
});

const showPassword = ref(false);
</script>

<template>
  <div
    class="mx-auto w-80 text-center md:w-[25rem] md:rounded-md md:px-6 md:py-8 md:shadow-md"
  >
    <form>
      <img src="/images/logo.png" alt="logo" class="mb-2 inline-block" />
      <p class="mb-1 text-center text-gray-500">Welcome to Coding Quizzes!</p>
      <h2 class="text-center text-2xl">Create an account</h2>
      <div class="input-group relative mt-8">
        <input
          type="text"
          id="username"
          name="username"
          class="w-full rounded-md border border-red-800 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-red-800"
          required
        />
        <label for="username" class="absolute">Username</label>
      </div>
      <div class="input-group relative mt-6">
        <input
          type="text"
          id="email"
          name="email"
          class="w-full rounded-md border border-red-800 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-red-800"
          required
        />
        <label for="email" class="absolute">Email</label>
      </div>
      <div class="input-group relative mt-6">
        <input
          :type="showPassword ? 'text' : 'password'"
          id="password"
          name="password"
          class="w-full rounded-md border border-red-800 py-2 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-red-800"
          required
        />
        <span
          className="cursor-pointer absolute right-[10px] top-[8px] text-lg"
          @click="showPassword = !showPassword"
        >
          <i v-if="showPassword" class="ri-eye-line"></i>
          <i v-else class="ri-eye-off-line"></i>
        </span>
        <label for="password" class="absolute">Password</label>
      </div>

      <button
        type="submit"
        class="mt-6 w-full rounded-md bg-red-800 py-2 text-white hover:bg-red-900"
      >
        Register
      </button>
    </form>
    <div class="mt-6 text-center text-red-800">
      <NuxtLink to="/login">Already have an account?</NuxtLink>
    </div>
  </div>
</template>
