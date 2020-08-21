import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { allFish, Fish } from "@/components/fish/fish.const";
import _ from "underscore";

const localStorageKey = "acnh-fish";
const debounceTimeInMillis = 1 * 1000;
const setLocalStorageDebounced: (ids: number[]) => void = _.debounce(
  (ids: number[]) => {
    console.log(`Set: ${ids}`);
    localStorage.setItem(localStorageKey, JSON.stringify(ids));
  },
  debounceTimeInMillis
);

@Module({ namespaced: true, name: "fish" })
class FishModule extends VuexModule {
  fishList: Fish[] = [];
  uncaughtFilter = false;
  timeFilter: "all" | "month" | "hour" = "all";

  @Mutation
  initFishList(): void {
    const idsJson = localStorage.getItem(localStorageKey);
    let ids: number[] = [];
    if (idsJson) {
      try {
        ids = JSON.parse(idsJson);
      } catch (err) {
        console.error(err);
      }
    }

    this.fishList = allFish.map((fish) => {
      return {
        ...fish,
        isCaught: ids.includes(fish.id),
      };
    });
  }

  @Mutation
  toggleFishCaughtStatus(id: number): void {
    const fish = this.fishList.find((fish) => fish.id === id);
    if (fish) {
      fish.isCaught = !fish.isCaught;
    }
  }

  @Mutation
  updateUncaughtFilter(uncaught: boolean): void {
    this.uncaughtFilter = uncaught;
  }

  @Mutation
  updateTimeFilter(time: "all" | "month" | "hour"): void {
    this.timeFilter = time;
  }

  get filteredFishList(): Fish[] {
    let fishList = this.fishList;

    if (this.uncaughtFilter) {
      fishList = fishList.filter((fish) => !fish.isCaught);
    }

    const date = new Date();
    const month = date.getMonth();
    const hour = date.getHours();

    if (this.timeFilter === "hour") {
      fishList = fishList.filter(
        (fish) =>
          fish.appearingMonths.months[month] && fish.appearingHours.hours[hour]
      );
    } else if (this.timeFilter === "month") {
      fishList = fishList.filter((fish) => fish.appearingMonths.months[month]);
    }

    return fishList;
  }

  @Action
  saveCaughtFishIds(): void {
    const ids = this.fishList
      .filter((fish) => fish.isCaught)
      .map((fish) => fish.id);

    setLocalStorageDebounced(ids);
  }
}

export default FishModule;
