import { createStore } from "vuex";

const store = createStore({
  state: {
    productList: [],
    singleProduct: {},
  },
  getters: {
    dataSource(state) {
      return state.productList;
    },
    singleProductInfo(state) {
      return state.singleProduct;
    },
  },
  mutations: {
    createProduct(state, data) {
      state.productList.push(data);
    },
    updateSingleProduct(state, data) {
      state.singleProduct = data;
    },
    editItem(state, data) {
      state.productList = state.productList.filter((item) => {
        return item.id != data.id;
      });
      state.productList.push(data);
    },
    removeItem(state, id) {
      state.productList = state.productList.filter((item) => {
        return item.id != id;
      });
    },
  },
  actions: {
    create({ commit }, data) {
      commit("createProduct", data);
    },
    update({ commit }, data) {
      commit("updateSingleProduct", data);
    },
    edit({ commit }, data) {
      commit("editItem", data);
    },
    remove({ commit }, id) {
      commit("removeItem", id);
    },
  },
});

export default store;
