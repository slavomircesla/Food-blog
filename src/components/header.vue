<template>
  <nav>
    <ul>
      <li><router-link to="/" exact>Jedla</router-link></li>
      <li>
        <router-link to="/addFood" exact>Pridat nove jedlo</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  margin-top: 0px;
}
ul {
  margin-top: 0px;
}

@media only screen and (min-width: 769px) {
  nav {
    background-color: lightblue;
  }
}
</style>
