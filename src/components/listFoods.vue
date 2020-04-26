<template>
  <div id="show-blogs">
    <h1>Nazvy jedal</h1>
    <input type="text" v-model="search" placeholder="search foods" />
    <div v-for="food in filteredFoods" class="single-food">
      <h2>{{ food.title }}</h2>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";
export default {
  data() {
    return {
      foods: [],
      search: ""
    };
  },
  created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(function(data) {
        this.foods = data.body.slice(0, 10);
      });
  },
  mixins: [searchMixin]
};
</script>

<style></style>
