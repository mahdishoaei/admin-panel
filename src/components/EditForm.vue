<template>
  <v-card class="w-100 px-5 py-8">
    <v-text-field
      v-model="form.name"
      label="Product Name"
      variant="solo"
      :error-messages="error.name.message"
    ></v-text-field>
    <v-text-field
      v-model="form.price"
      label="Product Price"
      variant="solo"
      :error-messages="error.price.message"
    ></v-text-field>
    <v-textarea
      v-model="form.description"
      label="Description"
      variant="solo"
      :error-messages="error.description.message"
    ></v-textarea>
    <v-select
      label="Status"
      v-model="form.status"
      :items="['Active', 'In Active']"
      variant="solo"
      :error-messages="error.status.message"
    ></v-select>
    <v-btn color="primary" @click="update" :loading="loading">Update</v-btn>
  </v-card>
</template>

<script setup>
import { computed,ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ValidateName, validateNumber, validateEmpty } from "@/utils/validate";

const store = useStore();
const router = useRouter();
const error = ref({
  name: { state: false, message: "" },
  price: { state: false, message: "" },
  description: { state: false, message: "" },
  status: { state: false, message: "" },
});

const form = computed(() => {
  return store.getters.singleProductInfo;
});

const update = () => {
  error.value.name = ValidateName(form.value.name);
  error.value.price = validateNumber(form.value.price);
  error.value.description = validateEmpty(form.value.description);
  error.value.status = validateEmpty(form.value.status);

  if (
    !error.value.name.state &&
    !error.value.price.state &&
    !error.value.description.state &&
    !error.value.status.state
  ) {
    store.dispatch("edit", form.value);
    router.push("/");
  }
};
</script>
