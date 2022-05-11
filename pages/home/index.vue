<template>
  <div class="context">
    <LeftBoxSide />
    <RightBoxSide />
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from "nuxt-property-decorator";
  import LeftBoxSide from "@/components/home/leftbox.component.vue";
  import RightBoxSide from "@/components/home/rightbox.component.vue";

  @Component({
    components: {
      LeftBoxSide,
      RightBoxSide
    }
  })
  export default class App extends Vue {}
</script>

<style scoped>
.context {
  display: grid;
  grid-template-columns: 40vw 60vw;
  grid-auto-rows: 100vh;
  background-image: url("@/assets/images/background-home.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

@media screen and (max-width: 750px){
  .context {
    grid-template-columns: 1fr;
  }
}
</style>
