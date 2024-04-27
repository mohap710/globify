<template>
  <h1>{{ country.name }}</h1>
  <h1>{{ country.capital }}</h1>
</template>

<script setup>
  import { useRouter } from "vue-router";
  import { useCountryStore } from "../stores/country";

  let country = useCountryStore().country;
  // // Get the country code from the route params and store it in a reactive variable.
  // let countryCode = router.currentRoute.value.params;
  // // If there is no country code, redirect to home page with an error message.
  // if (!countryCode) {
  //   alert("No country code provided");
  //   router.push({ name: "home" });
  // } else {
  //   console.log(`Country name: ${countryCode.name}`);
  // }
</script>

<style scoped></style>
