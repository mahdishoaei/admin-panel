<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-center">Name</th>
        <th class="text-center">Price</th>
        <th class="text-center">Description</th>
        <th class="text-center">Status</th>
        <th class="text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td class="text-center">{{ item.name }}</td>
        <td class="text-center">{{ item.price }}</td>
        <td class="text-center">{{ item.description.slice(0, 15) }}</td>
        <td class="text-center">{{ item.status }}</td>
        <th class="text-center">
          <v-btn color="blue" @click="handleEdit(item)">Edit</v-btn>
          <v-btn color="red" class="mx-2" @click="handleDialog(item)"
            >Remove</v-btn
          >
        </th>
      </tr>
    </tbody>
  </v-table>
  <template>
    <div class="text-center pa-4">
      <v-dialog v-model="dialogState" max-width="420" persistent>
        <v-card
          prepend-icon="mdi-map-marker"
          text="if you push agree this product will be deleted"
          title="are you sure to delete this product?"
        >
          <template v-slot:actions>
            <v-btn @click="dialogState = false"> Disagree </v-btn>
            <v-btn @click="handleRemove"> Agree </v-btn>
          </template>
        </v-card>
      </v-dialog>
    </div>
  </template>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const dialogState = ref(false);
const deleteItem = ref({});

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
});

const handleEdit = (item) => {
  router.push(`/product/${item.id}`);
  store.dispatch("update", item);
};

const handleDialog = (item) => {
  dialogState.value = true;
  deleteItem.value = item;
};

const handleRemove = () => {
  dialogState.value = false;
  store.dispatch("remove", deleteItem.value.id);
};
</script>
