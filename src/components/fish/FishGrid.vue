<template>
  <div class="container">
    <h2>Caught Fish</h2>
    <div class="grid-container">
      <div
        :class="['grid-item', { active: fish.isCaught }]"
        v-for="fish in fishList"
        :key="fish.id"
        @click="toggleFishCaughtStatus(fish.id)"
      >
        <img
          :class="['grid-image', { active: fish.isCaught }]"
          :src="fish.imageUrl"
        />
        <div class="grid-index">{{ fish.id }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Fish } from "./fish.const";
import { namespace } from "vuex-class";
const fish = namespace("fish");

@Component
export default class FishGrid extends Vue {
  @fish.State
  fishList!: Fish[];

  @fish.Mutation
  toggleFishCaughtStatus!: (id: number) => void;
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.grid-container {
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-auto-flow: column;
  border-top: 1px solid #dbd2a0;
  border-left: 1px solid #dbd2a0;
  margin-bottom: 30px;
}

.grid-item {
  background-color: #ede4b8;
  padding: 15px;
  width: 50px;
  height: 50px;
  border-bottom: 1px solid #dbd2a0;
  border-right: 1px solid #dbd2a0;
  position: relative;
}

.grid-item.active {
  background-color: #6bee6b;
}

.grid-item:hover {
  background-color: #e9da90;
  cursor: pointer;
}

.grid-item.active:hover {
  background-color: #49b949;
}

.grid-item:active {
  background-color: #9b8d46;
}

.grid-image {
  max-width: 100%;
  height: auto;
  opacity: 0.2;
}

.grid-image.active {
  opacity: 1;
}

.grid-index {
  position: absolute;
  z-index: 1;
  bottom: 3px;
  left: 4px;
  font-size: 0.8rem;
}
</style>
