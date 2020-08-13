import Vue from "vue";
import Vuex from "vuex";
import FishModule from "@/store/modules/fish";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { fish: FishModule }
});
