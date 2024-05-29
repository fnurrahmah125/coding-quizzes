<script setup lang="ts">
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

userStore.getUserByUsername();

const input = ref({
  username: "",
  name: "",
  email: "",
  location: "",
  about: "",
  github: "",
  linkedin: "",
  website: "",
});

console.log(input);
</script>

<template>
  <div class="bg-slate-50 px-4 py-14">
    <div class="mx-auto flex min-h-screen max-w-6xl gap-7">
      <div class="h-[30rem] w-1/6 bg-red-50"></div>
      <div class="w-5/6 rounded-md border border-neutral-200 bg-white">
        <form class="p-10">
          <div class="mb-8">
            <label for="username" class="mb-3 inline-block">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              v-model="input.username"
              class="inline-block w-full rounded-md border border-neutral-300 px-3 py-2"
            />
          </div>
          <div class="mb-8">
            <label for="name" class="mb-3 inline-block">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              v-model="input.name"
              class="inline-block w-full rounded-md border border-neutral-300 px-3 py-2"
            />
          </div>
          <div class="mb-8">
            <label for="email" class="mb-3 inline-block">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              class="inline-block w-full rounded-md border border-neutral-300 px-3 py-2"
            />
          </div>
          <div class="mb-8">
            <label for="location" class="mb-3 inline-block">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              class="inline-block w-full rounded-md border border-neutral-300 px-3 py-2"
            />
          </div>
          <div class="mb-8">
            <label for="about" class="mb-3 inline-block">About</label>
            <input
              type="text"
              id="about"
              name="about"
              class="inline-block w-full rounded-md border border-neutral-300 px-3 py-2"
            />
          </div>
          <div class="mb-8">
            <label for="github" class="mb-3 inline-block">Github</label>
            <input
              type="text"
              id="github"
              name="github"
              class="inline-block w-full rounded-md border border-neutral-300 px-3 py-2"
            />
          </div>
          <div class="mb-8">
            <label for="linkedin" class="mb-3 inline-block">LinkedIn</label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              class="inline-block w-full rounded-md border border-neutral-300 px-3 py-2"
            />
          </div>
          <div class="mb-8">
            <label for="website" class="mb-3 inline-block">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              class="inline-block w-full rounded-md border border-neutral-300 px-3 py-2"
            />
          </div>
          <button
            class="rounded-md bg-red-800 px-5 py-3 text-white hover:bg-red-900"
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
~/stores/user
