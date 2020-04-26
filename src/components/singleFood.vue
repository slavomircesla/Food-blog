<template>
  <div id="single-food">
    <h1>{{ food.title }}</h1>
    <article>{{ food.content }}</article>
    <p>Author {{ food.author }}</p>
    <ul>
      <li v-for="category in food.categories">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      food: {},
      id: this.$route.params.id
    };
  },
  created() {
    this.$http
      .get(
        "https://food-database-1a393.firebaseio.com//posts/" + this.id + ".json"
      )
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.food = data;
      });
  }
};
</script>

<style></style>
