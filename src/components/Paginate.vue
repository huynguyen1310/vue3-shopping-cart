<template>
  <div class="join">
    <input v-for="index in lastPage" class="join-item btn btn-square" type="radio" name="options" :aria-label="index"
      :checked='currentPage == index' @click="$emit('goToPage', index)" />
  </div>
</template>

<script setup>
import { computed, defineProps, ref, toRefs } from 'vue';
const total = ref(0)
const perPage = ref(6)
const currentPage = ref(1)
const lastPage = ref(1)

const emit = defineEmits(['goToPage'])

const props = defineProps({
  data: Object
});

const { data } = toRefs(props)

total.value = data.value.total
perPage.value = data.value.per_page
currentPage.value = data.value.current_page
lastPage.value = data.value.last_page

</script>

