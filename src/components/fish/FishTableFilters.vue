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
import { namespace } from "vuex-class";
const fish = namespace("fish");

@Component
export default class FishTableFilters extends Vue {
  @fish.State
  uncaughtFilter!: boolean;

  @fish.State
  timeFilter!: "all" | "month" | "hour";

  @fish.Mutation
  updateUncaughtFilter!: (uncaught: boolean) => void;

  @fish.Mutation
  updateTimeFilter!: (time: "all" | "month" | "hour") => void;

  get uncaught(): boolean {
    return this.uncaughtFilter;
  }

  set uncaught(uncaught) {
    this.updateUncaughtFilter(uncaught);
  }

  get time(): "all" | "month" | "hour" {
    return this.timeFilter;
  }

  set time(time) {
    this.updateTimeFilter(time);
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
