<template>
  <div id="app">
    <div class="container">
      <Main />
      <List />
    </div>
  </div>
</template>

<script>
import Main from './components/Main.vue'
import List from './components/List.vue'

export default {
  name: 'app',
  data(){
    return {
    }
  },
  components: {
    Main,
    List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.select select:active, .select select:focus {
  border-color: #444;

}
.select:not(.is-multiple):not(.is-loading)::after {
  border-color: #444;
}
.input:active, .input:focus {
  border-color: #444;
}
</style>
