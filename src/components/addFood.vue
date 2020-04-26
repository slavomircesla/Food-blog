<template>
  <div id="add-blog">
    <h2>Pridat nove jedlo</h2>
    <form v-if="!submitted">
      <h3>Názov jedla:</h3>
      <input type="text" v-model.lazy="food.title" required />
      <h3>Recept:</h3>
      <textarea v-model.lazy.trim="food.content"></textarea>
      <div id="checkboxes">
        <p>Druh jedla:</p>
        <label>Raňajky</label>
        <input type="checkbox" value="Ranajky" v-model="food.categories" />
        <label>Obed</label>
        <input type="checkbox" value="Obed" v-model="food.categories" />
        <label>Večera</label>
        <input type="checkbox" value="Vecera" v-model="food.categories" />
      </div>
      <label>Autor:</label>
      <select v-model="food.autor">
        <option v-for="autor in autors">{{ autor }}</option>
      </select>
      <hr />
      <button v-on:click.prevent="post">Pridat jedlo</button>
    </form>
    <div v-if="submitted">
      <h3>Pridali ste jedlo</h3>
    </div>
    <div id="preview">
      <h3>Jedlo</h3>
      <p>Nazov jedla {{ food.title }}</p>
      <p>Recept:</p>
      <p style="white-space: pre">{{ food.content }}</p>
      <p>Druh jedla</p>
      <ul>
        <li v-for="category in food.categories">{{ category }}</li>
      </ul>
      <p>Autor: {{ food.autor }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      food: {
        title: "",
        content: "",
        categories: [],
        autor: ""
      },
      autors: ["Slavo", "Peter", "Tomas", "Jozo"],
      submitted: false
    };
  },
  methods: {
    post: function() {
      this.$http
        .post(
          "https://food-database-1a393.firebaseio.com/posts.json",
          this.food
        )
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    }
  }
};
</script>

<style></style>
