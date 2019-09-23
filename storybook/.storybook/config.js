import { configure } from "@storybook/vue";
import Vue from "vue";
import List from "../src/components/list/List.vue";
Vue.component("List", List);
function loadStories() {
  const req = require.context("../src/components", true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
