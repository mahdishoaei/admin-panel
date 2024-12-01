<template>
  <v-app>
    <v-container>
      <div class="d-flex flex-column mb-8">
        <span class="text-h6 text-primary">PRODUCT LIST</span>
        <span class="text-primary"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          suscipit. Pariatur quod porro fugiat debitis quasi rem officia
          molestiae sunt eaque fuga perferendis saepe deleniti dignissimos ullam
          sint, blanditiis eos!</span
        >
        <v-divider class="mt-3"></v-divider>
      </div>

      <v-card class="w-100">
        <ProductTable :data="dataSource"></ProductTable>
      </v-card>
    </v-container>
  </v-app>
</template>

<script setup>
import ProductTable from "@/components/ProductTable.vue";
import { computed } from "vue";

import { useStore } from "vuex";
const store = useStore();

const dataSource = computed(() => {
  return store.getters.dataSource;
});
</script>
