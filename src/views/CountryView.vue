<script setup>
  import { useCountryStore } from "../stores/country";
  import { useRouter } from "vue-router";
  const router = useRouter();
  let { country, countries, setCountry } = useCountryStore();
  function getCurrencies(currencies) {
    if (!currencies) {
      return "None";
    }
    return currencies
      .map((currency) => `${currency?.name}(${currency?.symbol})`)
      .join(", ");
  }

  function getLangs(langs) {
    if (!langs) {
      return none;
    }
    return langs.map((lang) => `${lang?.name}`).join(", ");
  }
  function getCountryName(countryCode) {
    country = countries.find((country) => {
      return country.alpha3Code === countryCode;
    });
    return country.name;
  }

  function viewCountry(countryCode) {
    country = countries.find((country) => {
      return country.alpha3Code === countryCode;
    });
    setCountry({ ...country });
    router.replace({
      name: "country",
      params: { name: country.name },
    });
  }
</script>

<template>
  <main>
    <button class="btn" @click="$router.push('/')">
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
      back
    </button>

    <section class="container">
      <div class="flag">
        <img :src="country.flag" :alt="country.name + ' flag'" />
      </div>
      <div>
        <div class="country-details">
          <h1>{{ country.name }}</h1>
          <div class="main-details">
            <span><strong>Native name:</strong> {{ country.nativeName }}</span>
            <span class="d-block info-text">
              <strong>Region:</strong>
              {{ country.region }}
            </span>
            <span class="d-block info-text">
              <strong>Sub region:</strong> {{ country.subregion }}
            </span>
            <span class="d-block info-text"
              ><strong>Capital:</strong> {{ country.capital }}</span
            >
            <span class="d-block text-info">
              <strong>Population:</strong>
              {{ country.population }}
            </span>
          </div>
          <div class="additional-details">
            <span class="d-block info-text">
              <strong>Top Level Domain:</strong>
              {{ country.topLevelDomain[0] }}
            </span>
            <span class="d-block info-text">
              <strong>Currencies:</strong>
              {{ getCurrencies(country.currencies) }}
            </span>
            <span class="d-block info-text">
              <strong>Languages:</strong>
              {{ getLangs(country.languages) }}
            </span>
          </div>
        </div>
        <div class="border-countries">
          <strong class="text-info">Border countries : </strong>
          <ul v-if="country?.borders?.length > 0">
            <li
              v-for="countryCode in country.borders"
              :key="countryCode"
              @click="viewCountry(countryCode)"
            >
              {{ getCountryName(countryCode) }}
            </li>
          </ul>
          <span class="info-text" v-else>Unknown</span>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
  main {
    padding: min(5vw, 3rem);
    /* max-width: 1250px; */
    margin-inline: auto;
  }
  .btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block: 2rem;
    padding-inline: 1.5rem;
  }
  svg {
    fill: var(--color-text);
    transition: all ease-in-out 100ms;
  }
  path {
    transition: all ease-in-out 200ms;
  }
  .btn:hover path {
    transform: translateX(-5px);
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 2rem max(5vw, 5rem);
  }
  .flag {
    width: min(100vw, 32rem);
    border-radius: var(--border-radius);
    flex-grow: 0.2;
    aspect-ratio: 16 / 10;
    overflow: hidden;
  }
  .country-details {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    column-gap: 4rem;
    flex-grow: 1;
  }
  h1 {
    font-size: calc(1vw + 1rem);
    width: 100%;
    margin-block: 1.3rem;
    font-weight: 800;
  }
  .info-text {
    margin-block: 1rem;
    font-size: 0.9rem;
  }
  .border-countries {
    margin-block: 1.2rem;
  }
  ul {
    list-style: none;
    display: inline-block;
    max-width: 55ch;
    vertical-align: middle;
  }
  li {
    display: inline-block;
    padding: 0.6rem 1rem;
    margin: 0.4rem;
    border: 1px solid #4e4e4e;
    cursor: pointer;
  }
</style>
