<template>
  <div class="container">
    <h2>Fish List</h2>
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
import { allFish } from "./fish.const";

@Component
export default class FishList extends Vue {
  allFish = allFish;
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
</style>
