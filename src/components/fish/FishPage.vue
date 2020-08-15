<template>
  <div class="container">
    <fish-grid />
    <fish-table />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FishGrid from "./FishGrid.vue";
import FishTable from "./FishTable.vue";

@Component({
  components: { FishGrid, FishTable }
})
export default class FishPage extends Vue {}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
