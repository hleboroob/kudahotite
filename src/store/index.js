import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    categories: [],
    itemsSlider: [],
    subjects:[],
    material:[],
    size:[],
    tags:[]
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CATEGORIES_TO_STATE: (state, categories) => {
      state.categories = categories;
    },
    SET_SUBJECTS_TO_STATE: (state, subjects) => {
      state.subjects = subjects;
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios("/api/products/", {
        method: "GET",
      }).then((products) => {
        commit("SET_PRODUCTS_TO_STATE", products.data);
        return products
      }).catch((error) => {
        console.log(error)
        return error
      });
    },
    GET_CATEGORIES_FROM_API({ commit }) {
      return axios("/api/categories/", {
        method: "GET",
      }).then((categories) => {
        commit("SET_CATEGORIES_TO_STATE", categories.data);
        return categories
      }).catch((error) => {
        console.log(error)
        return error
      });
    },
    GET_SUBJECTS_FROM_API({ commit }) {
      return axios("/api/subjects/", {
        method: "GET",
      }).then((subjects) => {
        commit("SET_SUBJECTS_TO_STATE", subjects.data);
        return subjects
      }).catch((error) => {
        console.log(error)
        return error
      });
    },
  },
  modules: {
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CATEGORIES(state) {
      return state.categories;
    },
    SUBJECTS(state) {
      return state.subjects;
    },
  },
})
