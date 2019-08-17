<template>
  <div class="productCard box columns is-vcentere">
    <div class="has-text-left column">{{ product.winner }}</div>
    <footer class="productActions column columns">
      <b-select placeholder="Anzahl" v-model="product.count">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </b-select>
      <b-button style="margin-left: 1em" v-on:click="addToCart" type="is-rounded is-success"
          icon-left="cart-plus">
          Merken
      </b-button>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'Product',
  props: {
    product: Object
  },
  methods: {
    addToCart: function(){
      this.$store.commit('addToList', this.product)
      this.success()
    },
    success() {
      this.$buefy.toast.open({
          message: 'Zur Liste hinzugefügt',
          type: 'is-success',
          position: 'is-bottom'
      })
    }
  }
}
</script>

<style scoped>
.productCard {
    width: 70%;
    margin: 0 auto;
}
.productActions {
  display: flex;
  justify-content: flex-end;
  align-items: center;

}
</style>
