<template>
  <button class="dashboard-float-button">
    <PlusIcon
      :size="20"
    />
  </button>
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator";
  import PlusIcon from "vue-material-design-icons/Plus.vue";

  @Component({
    components: {
      PlusIcon
    }
  })
  export default class DashboardFloatButtonComponent extends Vue {
  }
</script>

<style scoped>
.dashboard-float-button {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 15px;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
  background-color: #f68c1f;
  color: #ffffff;
  cursor: pointer;
}

.dashboard-float-button:hover {
  transition: .3s;
  background-color: #ffffff;
  color: #f68c1f;
  border: 2px solid #dddddd;
  transform: rotate(360deg);
  box-shadow: 0px 0px 10px rgb(0 0 0 / 20%);
}
</style>
