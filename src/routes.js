import showFoods from "./components/showFoods.vue";
import addFood from "./components/addFood.vue";
import singleFood from "./components/singleFood.vue";

export default [
  { path: "/", component: showFoods },
  { path: "/addFood", component: addFood },
  { path: "/food/:id", component: singleFood }
];
