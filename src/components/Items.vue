<script>
import { mapActions, mapGetters } from "vuex";
import value from '../store/modules/counter/state';
export default {
  computed: {
    ...mapGetters(["getItems"])
  },
  methods: {
    ...mapActions(["buyItem", "sellItem", "newValue"]),
    buy(item, pos) {
      this.buyItem(pos);
      this.newValue({ value: item.real_value, operation: "buy" });
    },
    sell(item, pos) {
      this.sellItem(pos);
      this.newValue({ value: item.real_value, operation: "sell" });
    }
  }
};
</script>


<template>
  <div class="container">
    <div class="row">
      <div v-for="(item, i) in getItems" :key="i" class="card col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <img class="img-block" :src="item.photo" :alt="item.name" />
        <h3 class="title">{{item.name}}</h3>
        <h5 class="value">{{item.value}}</h5>
        <div class="input-grid">
          <button
            type="button"
            class="btn btn-danger"
            :disabled="item.quantity < 1"
            @click="sell(item,i)"
          >Vender</button>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            style="text-align: center;"
            v-model="item.quantity"
          />
          <button 
          type="button" 
          class="btn btn-success"
          :class="{ disabled: getValue < item.value }"
          @click="buy(item,i)"
          >Comprar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.card
  max-width: 100%
  background-color: white
  text-align: center
  font-size: 18px
  padding: 20px 15px
  border: 1px solid #fff

.img-block
  display: block
  margin-left: auto
  margin-right: auto
  height: 110px
  object-fit: contain
  padding: 15px 10px 10px

.title
  font-size: 22px
  font-weight: bold

.value
  color: rgb(46, 204, 113)
  font-weight: bold

.input-grid
  font-size: 20px
  font-weight: bold
  display: grid
  grid-template-columns: repeat(3, 1fr)
  margin-top: 25px
  gap: 10px
</style>