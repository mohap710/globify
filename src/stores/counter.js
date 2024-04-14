import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: ({ counter }) => counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
