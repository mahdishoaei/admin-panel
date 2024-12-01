<template>
  <v-app>
    <v-main>
      <Navigation />
      <v-divider></v-divider>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
import Navigation from "./components/Navigation.vue";
</script>

<style lang="scss"></style>
