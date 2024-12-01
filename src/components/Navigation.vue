<template>
  <div class="nav">
    <div class="logo-content d-flex align-center px-3">
      <span class="text-h6 text-primary">Admin Panel</span>
    </div>
    <div class="items-content d-flex align-center justify-end px-3">
      <v-btn color="green mx-3" @click="router.push('/')">Product List</v-btn>
      <v-btn color="primary" @click="router.push('/product/new')"
        >Create Product</v-btn
      >
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
.nav {
  width: 100%;
  height: 10dvh;
  display: flex;
}

.logo-content {
  width: 50%;
  height: 10dvh;
}

.items-content {
  width: 50%;
  height: 10dvh;
}
</style>
