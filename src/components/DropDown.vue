<script setup>
  import { ref } from "vue";

  let selectedRegion = ref(null);

  function toggleDropdown() {
    let dropArea = document.querySelector("#dropArea");
    dropArea.classList.toggle("activeDropArea");
  }
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const emits = defineEmits({
    selectRegion(args) {
      return args;
    },
  });
  function filterByRegion(region) {
    const dropdown = document.querySelector(".filter-text");
    if (region !== "all") {
      selectedRegion.value = region;
    } else {
      // return to original State when clear filter
      region = "Filter By Region";
      selectedRegion.value = null;
    }
    dropdown.innerText = region;
    toggleDropdown();
    emits("selectRegion", region);
  }
</script>
<template>
  <div class="dropdown">
    <div class="dropdown-btn" @click="toggleDropdown()">
      <span class="filter-text"> Filter By Region </span>
      <span
        style="color: red"
        v-if="selectedRegion"
        @click="filterByRegion('all')"
      >
        <svg
          id="SvgjsSvg1011"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
        >
          <defs id="SvgjsDefs1012"></defs>
          <g id="SvgjsG1013">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="16"
              height="16"
            >
              <path
                d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z"
                fill="#e41749"
                class="color000 svgShape"
              ></path>
            </svg>
          </g>
        </svg>
      </span>
    </div>
    <div class="dropdown-area" id="dropArea">
      <ul>
        <li
          v-for="region in regions"
          :key="region"
          @click="filterByRegion(region)"
        >
          {{ region }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .dropdown {
    margin-top: 10px;
  }

  .dropdown-btn {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-elements);
    color: var(--color-text);
    padding: 1rem 2.5rem;
    border-radius: var(--border-radius);
    width: 220px;
    cursor: pointer;
    z-index: 10;
    overflow: hidden;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .dropdown-area {
    width: 220px;
    position: absolute;
    opacity: 0;
    transform: translateY(-35px);
    pointer-events: none;
    z-index: 100;
  }

  .dropdown-area ul {
    background-color: var(--color-elements);
    border-radius: var(--border-radius);
    margin-top: 10px;
    padding: 0;
    list-style: none;
  }

  .dropdown-area ul li {
    padding: 10px;
    cursor: pointer;
    transition: all ease-in-out 0.3s;
  }

  .dropdown-area ul li:nth-child(1) {
    margin-top: -30px;
    transition-duration: 0.3s;
  }

  .dropdown-area ul li:nth-child(2) {
    margin-top: -40px;
    transition-duration: 0.5s;
  }

  .dropdown-area ul li:nth-child(3) {
    margin-top: -40px;
    transition-duration: 0.6s;
  }

  .dropdown-area ul li:nth-child(4) {
    margin-top: -40px;
    transition-duration: 0.7s;
  }

  .dropdown-area ul li:nth-child(5) {
    margin-top: -40px;
    transition-duration: 0.8s;
  }

  .activeDropArea {
    opacity: 1;
    pointer-events: all;
    transform: translateY(-15px);
  }

  .activeDropArea ul li:nth-child(1),
  .activeDropArea ul li:nth-child(2),
  .activeDropArea ul li:nth-child(3),
  .activeDropArea ul li:nth-child(4),
  .activeDropArea ul li:nth-child(5) {
    margin-top: 0;
  }
</style>
