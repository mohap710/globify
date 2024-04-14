<script setup>
  import { ref, watch } from "vue";
  let limit = ref(12);
  let page = ref(1);

  const emits = defineEmits({
    changePage: function (args) {
      return args;
    },
  });
  const props = defineProps(["totalCountries"]);
  watch(page, (newVal, _) => {
    if (Number(newVal) < 1 || !newVal) return;
    const startIndex = (newVal - 1) * limit.value;
    const endIndex = newVal * limit.value;
    emits("changePage", { startIndex, endIndex });
  });
</script>
<template>
  <div class="pagination">
    <button class="btn prev" @click="page--" :disabled="page == 1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        id="keyboard-left-arrow"
      >
        <path
          d="M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"
        ></path>
      </svg>
    </button>
    <span class="page">{{ page }}</span>
    <button class="btn next" @click="page++">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        id="keyboard-right-arrow"
      >
        <path
          d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .page {
    padding: 0.6rem;
    max-width: 10ch;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--color-text);
    transition: all ease 300ms;
  }
  .page:focus {
    border: 1px solid var(--color-text);
    outline: transparent;
  }
  .page:invalid {
    border: 1px solid red;
  }
  .btn {
    padding: 0.6rem 1rem;
    color: var(--color-text);
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    background-color: var(--color-elements);
    cursor: pointer;
    transition: all ease-in-out 250ms;
  }
  .btn[disabled] {
    cursor: not-allowed;
  }
  .prev path,
  .next path {
    fill: var(--color-text);
    transition: all ease-in-out 300ms;
  }

  .prev:hover path {
    transform: translateX(-5px);
  }
  .next:hover path {
    transform: translateX(5px);
  }
</style>
