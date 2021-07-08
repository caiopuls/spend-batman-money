<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getItems"]),
    filterItems() {
      return this.getItems.filter(_ => _.quantity > 0);
    }
  }
};
</script>

<template>
  <div class="mt-5 mb-5" v-if="filterItems.length > 0">
    <h1 class="text-success font-weight-bold h3">Seu carrinho de compras</h1>
    <div class="container">
      <div class="row">
        <div
          class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 shop-info"
          v-for="(item, i) in filterItems"
          :key="i"
        >
          <img class="img-info" :src="item.photo" :alt="item.name" />
          <p class="mb-0 h6">
            {{item.name}}
            <span class="font-weight-bold">x{{item.quantity}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.shop-info
    text-align: center
    display: flex
    -webkit-box-align: center
    align-items: center
    -webkit-box-pack: center
    justify-content: center
    padding-top: 5px
    padding-bottom: 5px

.img-info
    max-height: 50px
    max-width: 50px
    margin-right: 7px
    display: inline
</style>