<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <RouterLink class="btn btn-ghost normal-case text-xl" to="/">daisyUI</RouterLink>
    </div>
    <div class="flex-none">
      <form @keypress.enter.prevent="searchHandler" class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" v-model="search" />
      </form>
      <RouterLink to="/cart">
        <div>
          <label class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span class="badge badge-sm indicator-item">{{ cartCount }}</span>
            </div>
          </label>
        </div>
      </RouterLink>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              src="https://yt3.ggpht.com/yti/AHyvSCCR8ont3T_L4driJ0dSksyWFU8nwKfSJ462Qw=s88-c-k-c0x00ffffff-no-rj-mo" />
          </div>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { useCartStore } from '../stores/cart.js'
import { useProductStore } from '../stores/products';
import { computed, onMounted, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

const search = ref('')

const store = useCartStore()
const productStore = useProductStore()

const { cartCount } = storeToRefs(store)

function searchHandler() {
  productStore.search(search.value)
}

onMounted(() => {
  store.fetchCart()
})
</script>

