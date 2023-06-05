import { computed, ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore('products', () => {
  const products = ref([])

  const list = computed(() => { return products.value })

  async function fetchAll() {
    const res = await axios.get('http://pingpong.test/api/products')
    products.value = res.data.data
  }

  return { products, fetchAll, list }
})
