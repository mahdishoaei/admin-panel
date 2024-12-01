<template>
  <v-app>
    <v-container>
      <div class="d-flex flex-column mb-8">
        <span class="text-h6 text-primary">UPDATE PRODUCT</span>
        <span class="text-primary"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          suscipit. Pariatur quod porro fugiat debitis quasi rem officia
          molestiae sunt eaque fuga perferendis saepe deleniti dignissimos ullam
          sint, blanditiis eos!</span
        >
        <v-divider class="mt-3"></v-divider>
      </div>
      <EditForm></EditForm>
    </v-container>
  </v-app>
</template>

<script setup>
import EditForm from "@/components/EditForm.vue";
</script>
