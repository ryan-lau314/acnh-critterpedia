<template>
  <div class="container">
    <h2>Caught Fish</h2>
    <div class="grid-container">
      <div
        :class="['grid-item', { active: fish.isCaught }]"
        v-for="fish in allFish"
        :key="fish.id"
        @click="toggleIsCaught(fish.id)"
      >
        <img
          :class="['grid-image', { active: fish.isCaught }]"
          :src="fish.imageUrl"
        />
        <div class="grid-index">{{ fish.id }}</div>
      </div>
    </div>
    <h2>Fish Details</h2>
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Area</th>
        <th>Appearing months</th>
        <th>Appearing hours</th>
      </tr>
      <tr v-for="fish in allFish" :key="fish.id">
        <td>{{ fish.id }}</td>
        <td>{{ fish.name }}</td>
        <td>{{ fish.area }}</td>
        <td>{{ fish.appearingMonths.readableName }}</td>
        <td>{{ fish.appearingHours.readableName }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { allFish, Fish } from "./fish.const";

@Component
export default class FishList extends Vue {
  allFish = allFish;

  getFish(fishId: number): Fish {
    console.log(`Checking fish ID ${fishId}`);
    const fish: Fish | undefined = allFish.find(fish => fish.id == fishId);
    if (fish) {
      return fish;
    } else {
      throw `Fish ID ${fishId} not found`;
    }
  }

  toggleIsCaught(fishId: number): void {
    const fish: Fish = this.getFish(fishId);
    fish.isCaught = !fish.isCaught;
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

table {
  border-collapse: collapse;
}

tr:first-child {
  border-radius: 25px;
  background-color: #dddddd;
}

tr:nth-child(2n + 3) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #cccccc;
}

th,
td {
  padding: 15px;
  border: none;
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
