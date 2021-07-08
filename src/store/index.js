import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import items from './modules/items'

Vue.use(Vuex)

const Store = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      counter,
      items
    }
  });
};

export default Store
