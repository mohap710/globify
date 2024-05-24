<script setup>
  import { ref, onMounted } from "vue";
  import SunIcon from "@/components/SunIcon.vue";
  import MoonIcon from "@/components/MoonIcon.vue";
  let theme = ref("");
  const html = document.querySelector("html");

  onMounted(() => {
    if (localStorage["theme"]) {
      theme.value = localStorage["theme"];
      return html.setAttribute("data-theme", theme.value);
    }
    theme.value = html.getAttribute("data-theme");
  });
  function toggleTheme() {
    theme.value == "light" ? (theme.value = "dark") : (theme.value = "light");
    html.setAttribute("data-theme", theme.value);
    localStorage["theme"] = theme.value;
  }
</script>
<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.png" alt="globify logo" class="logo__image" />
    </div>
    <button class="theme-switcher" @click="toggleTheme">
      <div v-if="theme == 'light'">
        <MoonIcon />
      </div>
      <div v-else>
        <SunIcon />
      </div>
    </button>
  </header>
</template>

<style scoped>
  header {
    position: sticky;
    top: 0;
    background-color: var(--color-elements);
    box-shadow: 0px -3px 4px var(--color-text);
    padding-inline: min(3rem, 5vw);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0 0 40px 40px;
    z-index: 11;
  }
  .logo__image {
    width: min(200px, 40vw);
    aspect-ratio: 16 / 7 !important;
    object-fit: contain;
    aspect-ratio: 1;
  }

  [data-theme="dark"] .logo__image {
    filter: brightness(0) invert(1);
  }

  .theme-switcher {
    background: transparent;
    border: none;
    width: 2.5rem;
  }
</style>
