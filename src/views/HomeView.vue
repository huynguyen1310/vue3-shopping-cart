<script setup>
import { computed, onMounted, watch } from 'vue';
import Card from '../components/Card.vue';
import Paginate from '../components/Paginate.vue';
import { useProductStore } from '../stores/products.js'
import { storeToRefs } from 'pinia';

const store = useProductStore()
const { list } = storeToRefs(store)

function goToPageHandler(page) {
  store.goToPage(page)
}

onMounted(() => {
  store.fetchAll();
});

</script>

<template>
  <div class="container mx-auto my-auto w-[800px]">
    <div class="flex justify-around flex-wrap content-center">
      <Card v-for="product in list.data" :name="product.name" :price='product.price' :image="product.image"
        :key="product.id" :product="product"></Card>
    </div>
    <div class="flex items-center justify-center mt-2">
      <Paginate :data='list' @goToPage='goToPageHandler' />
    </div>

  </div>
</template>
