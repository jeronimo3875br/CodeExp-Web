<template>
  <header class="menu">
    <ul class="menu-items">
      <nuxt-link class="menu-item" to="/home" tag="li">
        <a href="#">Home</a>
      </nuxt-link>
      <nuxt-link class="menu-item" to="/home" tag="li">
        <a href="#">About Us</a>
      </nuxt-link>
      <nuxt-link class="menu-item" to="/home" tag="li">
        <a href="#">Services</a>
      </nuxt-link>
      <nuxt-link class="menu-item" to="/dashboard" tag="li">
        <a id="menu-item-login" href="#">Login</a>
      </nuxt-link>
    </ul>
  </header>
</template>

<script>
  import { Vue, Component } from "nuxt-property-decorator";

  @Component
  export default class HeaderComponent extends Vue {}
</script>

<style scoped>
.menu {
  display: flex;
  align-items: center;
}

.menu-items {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
}

.menu-item {
  list-style: none;
  padding: 10px;
  border-radius: 50px;
}

.menu-item a {
  text-transform: uppercase;
  text-decoration: none;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
}

.menu-item a::after {
  content: "";
  display: block;
  height: 2px;
  width: 0%;
  margin-top: 5px;
  background-color: #ffffff;
}

.menu-item a:hover::after {
  transition: .2s;
  width: 100%;
}

#menu-item-login {
  color: #212121;
  background-color: #ffffff;
  padding: 10px 20px;
  border-radius: 50px;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
}

#menu-item-login::after {
  display: none;
}


@media screen and (max-width: 750px){
  .menu-item {
    font-size: 15px;
  }
}
</style>
