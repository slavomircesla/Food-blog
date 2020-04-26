export default {
  computed: {
    filteredFoods: function() {
      return this.foods.filter(food => {
        return food.title.match(this.search);
      });
    }
  }
};
