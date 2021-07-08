<script>
import Counter from "./components/Counter";
import Items from "./components/Items";
import Shopping from './components/Shopping'
export default {
  name: "App",
  components: {
    Counter,
    Items,
    Shopping
  }
};
</script>

<template>
  <div id="app">
    <h1 class="font-weight-bold">
      <img class="mb-5 header-photo" alt="Vue logo" src="./assets/batman.jpg" />
      <br />
      <span class="app-sub">BRUCE WAYNE</span>
      <span class="app-title">Gaste o dinheiro do Batman</span>
    </h1>
    <Counter class="mt-5" />
    <Items />
    <Shopping />
  </div>
</template>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin: 0 auto
  margin-top: 60px
  max-width: 950px

.header-photo
  border-radius: 50%

.app-title
  font-size: 28px
  font-weight: bold
.app-sub
  font-size: 21px
  display: flex 
  align-items: center
  justify-content: center
</style>
