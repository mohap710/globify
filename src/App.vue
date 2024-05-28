<script setup>
  import { RouterView } from "vue-router";
  import MainNav from "@/components/MainNav.vue";
  import MyFooter from "@/components/MyFooter.vue";
</script>

<template>
  <MainNav />
  <router-view :key="$route.fullPath" v-slot="{ Component }">
    <transition name="fade"> <component :is="Component" /> </transition>
  </router-view>

  <MyFooter />
</template>

<style>
  #app {
    min-height: 100dvh;
  }
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
