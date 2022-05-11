<template>
  <div class="container">
    <HeaderComponent />
    <MainComponent />
  </div>
</template>

<script  lang="ts">
  import { Vue, Component } from "nuxt-property-decorator";
  import MainComponent from "@/components/home/main.component.vue";
  import HeaderComponent from "@/components/home/header.component.vue";

  @Component({
    components: {
      HeaderComponent,
      MainComponent
    }
  })
  export default class RightBoxComponent extends Vue {}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 90vh;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
