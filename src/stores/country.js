import { defineStore } from 'pinia'

export const useCountryStore = defineStore({
  id: 'country',
  state: () => ({
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
