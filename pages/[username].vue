<script setup lang="ts">
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

userStore.getUserByUsername();
// console.log(userStore.userData);
</script>

<template>
  <div class="mx-auto min-h-screen max-w-[1900px] px-4 py-6 lg:w-[90%]">
    <div class="mx-auto max-w-5xl">
      <div>
        <div class="mb-8 text-center">
          <NuxtLink to="/settings/profile" class="relative inline-block"
            ><img
              src="https://cdn.vectorstock.com/i/500p/86/76/cute-black-cat-cartoon-character-vector-47268676.jpg"
              alt="profile"
              class="mx-auto h-32 w-32 rounded-full border-4 border-red-800 object-cover shadow-xl"
            />
            <NuxtLink
              to="/settings/profile"
              class="absolute -bottom-2 -right-3 rounded-full bg-white drop-shadow-lg hover:bg-red-800 hover:text-white"
            >
              <i class="ri-edit-2-line inline-block px-3 py-2 text-2xl"></i>
            </NuxtLink>
          </NuxtLink>
        </div>
        <div>{{ user }}</div>
      </div>
    </div>
  </div>
</template>
