import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import { post } from '@/store/modules/posts';

Vue.use(Vuex);
export const storeModules = {
  post,
};

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: storeModules,
});
