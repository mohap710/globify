<template>
  <div class="card">
    <div class="card-media">
      <img :src="country.flag" :alt="country.name + ' flag'" />
    </div>
    <div class="card-body">
      <h4 class="name">{{ country.name }}</h4>
      <p class="text">
        <strong>Capital:</strong> {{ country.capital ?? "None" }}
      </p>
      <p class="text">
        <strong>Population:</strong>
        {{ Number(country.population).toLocaleString() }}
      </p>
      <p class="text"><strong>Region:</strong> {{ country.region }}</p>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    country: {},
  });
</script>

<style scoped>
  .card {
    background-color: var(--color-elements);
    transition: transform ease-out 300ms;
  }
  .card:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }
  .card-media {
    position: relative;
    overflow: hidden;
    height: 220px;
    border-radius: var(--border-radius, 5px);
  }

  .card-body {
    padding: 1rem;
  }
  .name {
    font-size: 1.2rem;
    font-weight: 800;
    margin-block-end: 0.5rem;
  }
  .text {
    font-size: 0.8rem;
  }
  strong {
    font-weight: 800;
  }
</style>
