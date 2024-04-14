<script setup>
  import { ref, watch, onMounted } from "vue";
  import CountryCard from "../components/CountryCard.vue";
  import countriesData from "../../data.json";
  import Pagination from "../components/Pagination.vue";
  import DropDown from "../components/DropDown.vue";
  let countries = ref(countriesData);
  let keyword = ref("");
  let start = ref(0);
  let end = ref(12); // Limit per page
  let selectedRegion = ref(null);

  countries.value = countriesData.slice(start.value, end.value);

  function buttonClick({ startIndex, endIndex }) {
    if (selectedRegion.value) filterByRegion(selectedRegion.value);
    countries.value = countriesData.slice(startIndex, endIndex);
  }

  function filterByRegion(region) {
    selectedRegion.value = region;
    if (region == "Filter By Region") {
      return (countries.value = countriesData.slice(start.value, end.value));
    }

    countries.value = countriesData.filter((country) => {
      return country.region == region;
    });
    countries.value = countries.value.slice(start.value, end.value);
  }

  // watch(keyword, (newval, _) => {
  //   search(newval);
  // });

  function search(term) {
    countries.value = countriesData.filter((country) => {
      if (country.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())) {
        return country;
      }
    });
    countries.value = countries.value.slice(start.value, end.value);
  }
</script>

<template>
  <main>
    <div class="filters">
      <div class="search">
        <input
          type="search"
          v-model="keyword"
          @input="search(keyword)"
          placeholder="Search by Name"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="32"
            d="M338.29 338.29L448 448"
          />
        </svg>
      </div>
      <Pagination @changePage="buttonClick" />
      <DropDown @select-region="filterByRegion" />
    </div>
    <!-- <div class="card-container"> -->
    <TransitionGroup class="card-container" name="list" tag="div">
      <CountryCard
        v-for="country in countries"
        :country="country"
        :key="country"
      />
      <!-- <h1 v-if="countries.length == 0">NOOOOOOOOOOOO</h1> -->
    </TransitionGroup>
    <!-- </div> -->
  </main>
</template>
<style scoped>
  main {
    padding: min(3rem, 5vw);
  }
  .filters {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  @media (max-width: 800px) {
    .filters {
      width: 100%;
      justify-content: center;
    }
  }
  input {
    border-radius: var(--border-radius);
    padding: 1rem 2.5rem;
    margin-block: 1rem;
    width: 15rem;
    color: var(--color-text);
    border: 1px solid transparent;
    background-color: var(--color-elements);
    transition: all 300ms ease;
  }
  .search {
    position: relative;
    height: max-content;
  }
  .search svg {
    width: 1.3rem;
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
  input:focus {
    border: 1px solid var(--color-text);
    outline: transparent;
  }
  .card-container {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  .list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease-in-out;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(10px);
  }
</style>
