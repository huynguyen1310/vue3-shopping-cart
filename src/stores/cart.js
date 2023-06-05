import { defineStore, storeToRefs } from "pinia";
import axios from "axios";
import { computed, ref } from "vue";
import { useUserStore } from './user.js'
import router from "../router/index.js";

const apiUrl = "http://pingpong.test/api"


export const useCartStore = defineStore('cart', () => {
  const carts = ref([])
  const userStore = useUserStore()
  const { user } = storeToRefs(userStore)

  const cartCount = computed(() => { return (carts.value.length) })

  function cartTotal() {
    return carts.value.reduce((res, item) => {
      return res + (item.price * item.quantity)
    }, 0)
  }

  async function fetchCart() {
    if (!user.value) return carts.value = []
    const res = await axios.get(`${apiUrl}/cart/get-cart`, { headers: { Authorization: `Bearer ${user.value.token}` } })
    carts.value = res.data.data
  }

  async function addtoCart(id) {
    console.log(user)
    if (!user.value) {
      return router.push('/login')
    }

    await axios.post(`${apiUrl}/cart/add-item`, { 'product_id': id }, { headers: { Authorization: `Bearer ${user.value.token}` } })
    await this.fetchCart()
  }

  async function removeCartItem(id) {
    await axios.post(`${apiUrl}/cart/remove-item`, { 'product_id': id }, { headers: { Authorization: `Bearer ${user.value.token}` } })
    await this.fetchCart()
  }

  async function updateQuantity(id, quantity) {
    await axios.post(`${apiUrl}/cart/update-quantity`, { 'product_id': id, 'quantity': quantity }, { headers: { Authorization: `Bearer ${user.value.token}` } })
    await this.fetchCart()
  }

  return { carts, cartCount, fetchCart, addtoCart, cartTotal, removeCartItem, updateQuantity }
})
