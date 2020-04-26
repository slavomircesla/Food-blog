<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addFood from "./components/addFood.vue";
import showFoods from "./components/showFoods.vue";
import listFoods from "./components/listFoods.vue";
import header from "./components/header.vue";

export default {
  components: {
    "foods-show": showFoods,
    "foods-list": listFoods,
    "add-food": addFood,
    "app-header": header
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style></style>
