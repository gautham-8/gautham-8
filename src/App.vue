<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useTheme, initTheme } from './composables/useTheme'

initTheme()
const { theme, toggleTheme } = useTheme()
</script>

<template>
  <header>

    <div class="wrapper">

      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>

  <button
    type="button"
    @click="toggleTheme"
    :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    class="fixed top-4 right-4 z-50 p-2 rounded-full border border-gray-600 text-gray-300 hover:text-accent hover:border-accent transition-colors backdrop-blur"
  >
    <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
  </button>

  <RouterView />
</template>
