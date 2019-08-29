<template>
  <div>
    <div v-on:click="toggle" class="cartContainer">
      <b-icon icon="cart" size="is-medium" data-cy="cart"></b-icon>
    </div>
    <b-modal :active.sync="show">
      <div class="box listContainer">
        <h2 class="title is-2">Dein Merkzettel</h2>
        <ul class="producList">
          <p v-if="!list.length">Füge Produkte zu deiner Liste hinzu, um sie hier zu sehen</p>
          <li class="productItem" v-for="(product,i) in list" v-bind:key="i" data-cy="cartItem">
            <p>{{ product.winner }}</p>
            <div class="columns">
              <b-select placeholder="Anzahl" v-model="product.count">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </b-select>
              <b-button v-on:click="removeProduct(i)" style="margin-left: 1em" class="is-danger" icon-right="delete"></b-button>
            </div>
            </li>
        </ul>
      </div>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'List',
  data() {
    return {
        show: false,
        cartCount: 0,
    }
  },
  methods: {
    toggle: function(){
        this.show = !this.show
    },
    removeProduct: function(index){
      this.$store.commit('removeProduct', index)
    }
  },
  computed: {
    list(){
      return this.$store.state.list
    }
  }
}
</script>

<style scoped>
.productList {
  text-align: left;
  width: 50%;
  margin-top: 2em;
}
.productItem {
  text-align: left;
  padding: .8em;
  font-weight: 800;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.listContainer {
  background: white;
}
.cartContainer {
  position: fixed;
  top: 1em;
  right: 1em;
  cursor: pointer;
}
body {
  margin: 0;
}
.close {
    position: fixed;
    top: 1em;
    right: 1em;
    color: white;
    cursor: pointer;
}
.animation {
  transform: scale(1.5);
}
</style>