<template>
<div id="background-image">
  <app-header id="header"></app-header>
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
    "app-header": header,
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
    background-image: url(/src/images/12.jpg);
    background-position: center;
    background-repeat: no-repeat;
    object-fit: contain;
    background-size: cover;
}
</style>
