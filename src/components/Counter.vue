<script>
import { mapGetters } from "vuex";
import value from '../store/modules/counter/state';
export default {
  data: () => ({
    value: {value}
  }),
  computed: {
    ...mapGetters(["getValue"])
  }
};
</script>
<template>
  <div class="counter bg-success">Conta bancária: {{getValue}}</div>
</template>

<style lang="sass">
.counter
  color: white
  font-size: 32px
  font-weight: bold
  text-align: center
  top: 0px
  position: sticky
  padding: 20px
  margin: 10px 0px
  z-index: 100
  border-radius: 0px 0px 10px 10px
</style>