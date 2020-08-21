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
import { getModule } from "vuex-module-decorators";
import FishModule from "@/store/modules/fish";
import Store from "@/store";

const fishModule: FishModule = getModule(FishModule, Store);

@Component({
  components: { FishGrid, FishTable },
})
export default class FishPage extends Vue {
  created() {
    fishModule.initFishList();
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
