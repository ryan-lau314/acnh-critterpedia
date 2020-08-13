import { VuexModule, Module, Mutation } from "vuex-module-decorators";
import { allFish, Fish } from "@/components/fish/fish.const";

@Module({ namespaced: true, name: "fish" })
class FishModule extends VuexModule {
  fishList: Fish[] = allFish;
  uncaughtFilter = false;
  timeFilter: "all" | "month" | "hour" = "all";

  @Mutation
  toggleFishCaughtStatus(id: number): void {
    const fish = this.fishList.find(fish => fish.id === id);
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
      fishList = fishList.filter(fish => !fish.isCaught);
    }

    const date = new Date();
    const month = date.getMonth();
    const hour = date.getHours();

    if (this.timeFilter === "hour") {
      fishList = fishList.filter(
        fish =>
          fish.appearingMonths.months[month] && fish.appearingHours.hours[hour]
      );
    } else if (this.timeFilter === "month") {
      fishList = fishList.filter(fish => fish.appearingMonths.months[month]);
    }

    return fishList;
  }
}

export default FishModule;
