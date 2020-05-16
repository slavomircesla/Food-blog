<template>
  <div id="add-blog">
    <h2>Pridat nove jedlo</h2>
    <form v-if="!submitted" required>
      <h3>Názov jedla :</h3>
      <input type="text" id="input-type-title" v-model.lazy="food.title" required />
      <h3>Recept :</h3>
      <textarea v-model.lazy.trim="food.content" id="textarea" required></textarea>
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
      <p>Nazov jedla: {{ food.title }}</p>
      <p>Recept:</p>
      <p style="white-space: pre">{{ food.content }}</p>
      <p>Druh jedla:</p>
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
          this.submitted = true;
        });
    }
  }
};
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: -32px auto;
    max-width: 580px;
    padding: 20px;
}
#input-type-title{
border:1px solid grey;
font-size: 14px;
font-weight: bold;
}
label{
    display: block;
    margin: 20px 0 9px;
}
input[type="text"], textarea, select{
    display: block;
    width: 99%;
    border:1px solid grey;
    padding: 8px;
}
textarea{
    height:199px;
    font-size: 12px;
}
#preview{
    padding: 9px 20px;
    border: 1px dotted crimson;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
    margin-top: 0;
}
hr{
    display: none;
}
button{
    display: block;
    margin: 20px 0;
    background: crimson;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
}
</style>
