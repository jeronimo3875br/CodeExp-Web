<template>
  <section id="contact" class="container">
    <h1 v-if="login == false" class="title">{{ title }}</h1>
    <div v-else class="login-container">
      <LoginForm />
    </div>
  </section>
</template>

<script  lang="ts">
  import { Vue, Component, Prop } from "nuxt-property-decorator";
  import LoginForm from "@/components/login/form.component.vue";

  @Component({
    components: {
      LoginForm
    }
  })
  export default class LeftBoxComponent extends Vue {
    private title = "<codeexp/>";

    @Prop({
      default: false
    })
    private login: boolean = true;
  }
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(3px);
}

.title {
  font-size: 70px;
}

.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

@media screen and (max-width: 750px){
  .container {
    position: relative;
    grid-row-start: 2;
    height: auto;
  }
}
</style>
