<script setup>
  import { RouterView } from "vue-router";
  import mainnav from "@/components/MainNav.vue";
</script>

<template>
  <mainnav />
  <router-view :key="$route.fullPath" v-slot="{ Component }">
    <transition name="fade"> <component :is="Component" /> </transition>
  </router-view>
</template>

<style scoped>
  .fade-enter-active {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .fade-leave-active {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .fade-enter-to,
  .fade-leave-to {
    opacity: 1;
  }
</style>
