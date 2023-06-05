<script setup>
import { computed, onMounted } from 'vue';
import Card from '../components/Card.vue';
import { useProductStore } from '../stores/products.js'

const store = useProductStore()
const products = computed(() => { return store.list })

onMounted(() => {
  store.fetchAll();
});

</script>

<template>
  <div class="container mx-auto my-auto w-[800px]">
    <div class="flex justify-around flex-wrap content-center">
      <Card v-for="product in products" :name="product.name" :price='product.price' :image="product.image"
        :key="product.id" :product="product"></Card>
    </div>
  </div>
</template>
