<template>
  <nav>
    <ul>
      <li>
        <router-link to="/addFood" exact>Pridat nove jedlo</router-link>
        </li>
      <li>
        <router-link to="/" exact>Jedla</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
    text-decoration: underline;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
}
nav{
    padding: 30px 0;
    margin-bottom: 40px;
}
.router-link-active{
    background: peachpuff;
    color: #444;
}
</style>
