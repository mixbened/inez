<template>
  <div>
    <h1>INEZ</h1>
    <input v-model="keyword" type="text"><br>
    <button v-on:click="setWinner">Search</button>
    <h5>{{ winner }}</h5>
  </div>
</template>

<script>
import { search } from '../search.js'

export default {
  name: 'Main',
  data() {
    return {
      keyword: '',
      winner: ''
    }
  },
  methods: {
    setWinner: function(){
      this.winner = search(this.keyword)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input, button {
  width: 50%;
  height: 40px;
  font-size: 20px;
  margin-top: 10px;
}
</style>
