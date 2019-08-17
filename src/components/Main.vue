<template>
  <div>
    <h1 class="title">INEZ</h1>
    <h2 class="subtitle">Subtitle</h2>
    <div class="searchContainer">
      <b-field style="width: 50%; margin: 5% auto;">
        <b-input placeholder="Was möchtest du kaufen?" v-on:input="setWinner" v-model="keyword" rounded></b-input>
      </b-field>
      <hr>
      <div v-if="keyword.length > 3">
        <Product v-bind:product="winner" />
      </div>
    </div>
  </div>
</template>

<script>
import { search } from '../search.js'
import Product from './Product';

export default {
  name: 'Main',
  components: {
    Product
  },
  data() {
    return {
      keyword: '',
      winner: ''
    }
  },
  methods: {
    setWinner: function(){
      console.log('Set winner runs')
      this.winner = search(this.keyword)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchField {
  height: 40px;
  font-size: 20px;
  margin: 10px auto;
  width: 50%;
  padding: 0;
  border-width: 1px;
}
.searchContainer {
  position: relative;
  width: 100%;
  margin: 0 auto;
}
.winner {
  position: absolute;
  top: 40;
  width: 100%;
  background: white;
  border: 1px solid gray;
}

hr {
  width: 100%;
}
</style>
