<template>
  <div id="app">
    <fish-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FishList from "./components/fish/FishList.vue";

@Component({
  components: {
    FishList
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
