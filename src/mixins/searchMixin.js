export default {
  computed: {
    filteredFoods: function() {
      return this.foods.filter(food => {
        return food.title.toLowerCase().match(this.searchInput.toLowerCase());
      });
    }
  }
};
