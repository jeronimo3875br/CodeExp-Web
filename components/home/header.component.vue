<template>
  <header class="menu">
    <ul class="menu-items">
      <li class="menu-item">
        <a href="#">Home</a>
      </li>
      <li class="menu-item">
        <a href="#">About us</a>
      </li>
      <li class="menu-item">
        <a href="#">Services</a>
      </li>
      <li class="menu-item">
        <a href="#">Contact</a>
      </li>
    </ul>
  </header>
</template>

<script>
  import { Vue, Component } from "nuxt-property-decorator";

  @Component
  export default class HeaderComponent extends Vue {

  }
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
}

.menu-item a {
  text-transform: uppercase;
  text-decoration: none;
  color: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
}

.menu-item a:hover {
  text-decoration: underline;
}
</style>
