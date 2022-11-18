import { storage } from "@/utils"
import { defineStore } from "pinia"


export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'count',
        storage,
      },
    ],
  },
})