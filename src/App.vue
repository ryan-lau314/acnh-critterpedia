<template>
  <div id="app">
    <fish-page />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FishPage from "./components/fish/FishPage.vue";

@Component({
  components: {
    FishPage
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
