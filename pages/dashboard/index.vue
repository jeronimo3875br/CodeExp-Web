<template>
  <div class="container">
    <DashboardHeader
      :username="'Gabriel Jeronimo'"
    />
    <DashboardFloatButton />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator";
  import DashboardHeader from "@/components/dashboard/header.component.vue";
  import DashboardFloatButton from "@/components/dashboard/floatButton.component.vue";

  @Component({
    components: {
      DashboardHeader,
      DashboardFloatButton
    }
  })
  export default class Dashboard extends Vue {}
</script>
