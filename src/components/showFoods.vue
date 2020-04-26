<template>
  <div id="all-foods">
    <h1>Vsetky Clanky o jedlach</h1>
    <input type="text" v-model="search" placeholder="search foods" />
    <div v-for="food in filteredFoods" class="single-food">
      <router-link v-bind:to="'/food/' + food.id">
        <h2>{{ food.title }}</h2>
      </router-link>
      <article>{{ food.content }}</article>
    </div>
  </div>
</template>

<script>
// Imports
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
      .get("https://food-database-1a393.firebaseio.com/posts.json")
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        var foodsArray = [];
        for (let key in data) {
          data[key].id = key;
          foodsArray.push(data[key]);
        }
        this.foods = foodsArray;
      });
  },
  mixins: [searchMixin]
};
</script>

<style></style>
