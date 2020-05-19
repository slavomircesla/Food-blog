<template>
  <div id="show-blogs">
    <h1>Nazvy jedal</h1>
    <input type="text" v-model="search" placeholder="Vyhľadať jedlo" id="food-search"/>
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

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-food{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px dotted #aaa;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
}
#food-search{
  border: 1px solid grey;
}
input[type="text"]{
    padding: 7px;
    margin-left: 2%;
    width: 94%;
    box-sizing: border-box;
}

</style>
