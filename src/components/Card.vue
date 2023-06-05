<template>
  <div class="card card-compact w-48 bg-base-100 shadow-xl mx-2 my-2">
    <figure><img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">{{ name }}</h2>
      <p>${{ price }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" @click="store.addtoCart(product.id)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';
import { useCartStore } from '../stores/cart';

const props = defineProps({
  name: String,
  image: String,
  price: Number,
  product: Object
});

const { name, price, product } = toRefs(props)

const store = useCartStore()

</script>

