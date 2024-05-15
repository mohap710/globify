import { defineStore } from 'pinia'
import countries from './data.json'
export const useCountryStore = defineStore({
  id: 'country',
  state: () => ({
    countries,
    country: JSON.parse(localStorage.getItem('country')) || '',
  }),
  getters: {

  },
  actions: {
    setCountry(country) {
      localStorage.setItem("country", JSON.stringify(country));
      this.country = country;
    }
  }
})
