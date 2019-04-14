import Vue from 'vue';
import Vuex from 'vuex';
import blockchainData from './modules/blockchainData';

// Load Vuex
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    blockchainData
  }
})

export default store;