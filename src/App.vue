<template>
<div>
  <app-header id="header"></app-header>
  <div>
    <router-view></router-view>
  </div>
  <footer>
        <p>Copyright© 2020 Slavomir </p>
    </footer>
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
}
footer{
    background: crimson;
    padding: 6px;
}
footer p{
 color: peachpuff;
 text-align: center;
}
</style>
