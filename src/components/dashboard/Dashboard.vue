<template>
  <div>
    <p>Dashboard Components</p>
    <button @click='handleFetchData'>Click</button>
    <button @click='handleGetLatestBlock'>Latest Block</button>

    <div v-if='displayBlock.bool === true && displayBlock.data.length !== 0 '>
      <p>bits: {{ displayBlock.data.bits }}</p>
      <p>me1</p>
      <p>block_index: {{ displayBlock.data.block_index }}</p>
      <p>fee: {{ displayBlock.data.fee }}</p>
      <p>hash: {{ displayBlock.data.hash }}</p>
      <p>height: {{ displayBlock.data.height }}</p>
      <p>main_chain: {{ displayBlock.data.main_chain }}</p>
      <p>mrkl_root: {{ displayBlock.data.mrkl_root }}</p>
      <p>n_tx: {{ displayBlock.data.n_tx }}</p>
      <p>nonce: {{ displayBlock.data.nonce }}</p>
      <a @click='handleGetPrevBlock(displayBlock.data.prev_block)'>prev_block: {{ displayBlock.data.prev_block }}</a>
      <p>size: {{ displayBlock.data.size }}</p>
    </div>
    <div v-else-if='displayBlock.bool === true && displayBlock.latestBlock.length !== 0'>
      <p>me2</p>
      <p>block_index: {{ displayBlock.latestBlock.block_index }}</p>
      <a @click='handleFetchData(displayBlock.latestBlock.hash)'>hash: {{ displayBlock.latestBlock.hash }}</a>
      <p>height: {{ displayBlock.latestBlock.height }}</p>
      <p>time: {{ displayBlock.latestBlock.time }}</p>
    </div>
    <div v-else=''>
      <p>False</p>
    </div>
    <input type="text" v-model='textBox' @click='handleChangeBool' @keyup.enter='handleSubmit($event)'/>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: "Dashboard",
  data() {
    return {
      textBox: ""
    }
  },
  methods: {
    ...mapActions(['handleFetchData', 'handleGetSingleBlock', 'handleGetLatestBlock']),
    ...mapState(['bool']),
    handleSubmit(event) {
      if(event.key === 'Enter' && this.textBox !== '') {
        this.handleGetSingleBlock(this.textBox)
        this.textBox = ''
      } else {
        console.log(false);
      }

    },
    handleGetPrevBlock(value) {
      this.handleGetSingleBlock(value)
    },
    handleChangeBool() {
      if(this.displayBlock.bool === true) {
        this.displayBlock.bool = false
      } else {
        return null
      }
    }
  },
  computed: {
    ...mapGetters({
      displayBlock: 'getAllBlockData'
    })
  }
}

</script>

<style>

</style>
