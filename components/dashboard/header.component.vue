<template>
  <header class="dashboard-header">
    <div class="dashboard-header-company-data">
      <!-- <a href="#">Dashboard | <span class="experience-word">CodeExp</span></a> -->
      <a href="#">Code<span class="experience-word">Exp</span></a>
    </div>
    <div class="dashboard-header-user-data">
      <a href="#">{{ username }}</a>
      <img
        src="@/assets/images/profile.jpg"
      />
    </div>
  </header>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from "nuxt-property-decorator";

  @Component
  export default class DashboardHeaderComponent extends Vue {
    @Prop({
      required: true
    })
    private username!: string;
  }
</script>

<style scoped>
.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  width: 100vw;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 10%);
}

.dashboard-header-user-data {
  display: flex;
  align-items: center;
}

.dashboard-header-company-data a {
  color: #808080;
  font-size: 20px;
  text-decoration: none;
  font-weight: bold;
}

.dashboard-header-user-data img {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  padding: 1.5px;
  border: 3px solid #f68c1f;
}

.dashboard-header-user-data a {
  color: #808080;
  font-size: 17px;
  text-decoration: none;
  font-weight: bold;
  margin-right: 10px;
}

.experience-word {
  color: #f68c1f;
}
</style>
