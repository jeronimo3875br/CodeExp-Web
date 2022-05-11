<template>
  <main>
    <AboutUsCardComponent
      :title="'About us'"
      :description="'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'"
      :has-contact-button="true"
    />
  </main>
</template>

<script lang="ts">
  import { Vue, Component } from "nuxt-property-decorator";
  import AboutUsCardComponent from "@/components/home/aboutUsCard.component.vue";

  @Component({
    components: {
      AboutUsCardComponent
    }
  })
  export default class MainComponent extends Vue {
  }
</script>

<style scoped>
main {
  display: flex;
  align-content: center;
  align-items: center;
}
</style>
