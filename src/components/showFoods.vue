<template>
  <div id="all-foods">
    <h1>Všetky Jedlá:</h1>
    <div id="text-style">
    <input type="text" v-model="search" placeholder="search foods" />
    </div>
    <div v-for="food in filteredFoods" class="single-food">
      <router-link v-bind:to="'/food/' + food.id">
        <h2>{{ food.title }}</h2>
      </router-link>
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

<style scoped>
#all-foods{
    max-width: 800px;
    margin: 0px auto;
    height: 594px;
}
.single-food{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: peachpuff;
    border: 1px dotted #aaa;
    text-decoration: none;
}
#text-style{
  border: 1px solid grey;
  border-left: 1px solid grey;
  width: 90%;
  margin-left: 5%;
}
#all-foods a{
    color: black;
    text-decoration: none;
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}
h1{
 margin-left: 35%;
}
footer{
  display: none;
}
@media screen and (max-width: 992px) {
  h1{
    margin-left: 10px;
  }
}
</style>
