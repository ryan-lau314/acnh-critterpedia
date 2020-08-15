<template>
  <form class="filter-list">
    <div class="filter">
      <input type="checkbox" id="uncaught" v-model="uncaught" />
      <label for="uncaught">Uncaught only</label>
    </div>
    <div class="filter">
      <input type="radio" id="all" name="time" value="all" v-model="time" />
      <label for="all">All</label><br />
      <input type="radio" id="month" name="time" value="month" v-model="time" />
      <label for="month">Current month</label><br />
      <input type="radio" id="hour" name="time" value="hour" v-model="time" />
      <label for="hour">Current hour</label>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import FishModule from "@/store/modules/fish";
import Store from "@/store";

const fishModule: FishModule = getModule(FishModule, Store);

@Component
export default class FishTableFilters extends Vue {
  get uncaught(): boolean {
    return fishModule.uncaughtFilter;
  }

  set uncaught(uncaught) {
    fishModule.updateUncaughtFilter(uncaught);
  }

  get time(): "all" | "month" | "hour" {
    return fishModule.timeFilter;
  }

  set time(time) {
    fishModule.updateTimeFilter(time);
  }
}
</script>

<style scoped>
.filter-list {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
}

.filter {
  display: flex;
  align-items: center;
}

.filter > input {
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 5px;
}

.filter > label {
  margin-right: 10px;
}
</style>
