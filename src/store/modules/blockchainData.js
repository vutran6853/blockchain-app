import axios from 'axios';
const serverURL = 'http://localhost:3012';

const state = {
  data: [],
  bool: false,
  singleBlock: [],
  latestBlock: [],
}


const getters = {
  getAllBlockData: function(state) {
    return state
  }
}

const actions = {
 async handleFetchData({}, hash) {
  const response = await axios.get(`${ serverURL }/api/getBlockchain/${ hash }`)

  this.commit('setBlock', response.data)
 },
 async handleGetSingleBlock({}, value) {
  const response = await axios.post(`${ serverURL }/api/getSingleBlock`, { userBlock: value})

  this.commit('setSingleBlock', response.data)
 },
 async handleGetLatestBlock() {
  const response = await axios.get(`${ serverURL }/api/getLatestBlock`)

  this.commit('setLatestBlock', response.data)
 }
}

const mutations = {
  setBlock: function(state, value) {
    return {
      ...state.data = value,
      ...state.bool = true
    }
  },
  setSingleBlock: function(state, value) {
    return {
      ...state.singleBlock = value,
      ...state.bool = true
    }  
  },
  setLatestBlock: function(state, value) {
    console.log('value', value);
    if(state.bool = true) {
      state.bool = false
    }

    return {
      ...state.latestBlock = value,
      ...state.bool = true
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}