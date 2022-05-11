<template>
  <div class="container">
    <h1 class="title">codeexp</h1>
  </div>
</template>

<script  lang="ts">
  import { Vue, Component } from "nuxt-property-decorator";

  @Component
  export default class LeftBoxComponent extends Vue {}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
}

.title {
  font-size: 70px;
}

@media screen and (max-width: 750px){
  .container {
    display: none;
  }
}
</style>
