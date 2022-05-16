<template>
  <div class="container">
    <div class="card">
      <h1 class="card-title">About Us</h1>
      <p class="card-description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      <a href="#contact" class="card-contact-button" @click="changeLoginStatus">Contact Us</a>
    </div>
  </div>
</template>

<script lang="ts">

    import { Vue, Component, namespace } from 'nuxt-property-decorator';
    import LoginForm from "@/components/login/form.component.vue";

    const user = namespace('contact');

    @Component({
        components: {
          LoginForm
        }
    })
    export default class AboutUsCardComponent extends Vue {
      @user.Getter
      public hasLoginStatus!: string

      @user.Mutation
      public changeLoginStatus!: () => void;
    }
</script>

<style scoped>
.card {
  position: relative;
  left: 15%;
  width: 40%;
  height: 50%;
  padding: 10px;
  display: grid;
  align-content: center;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-template-rows: 7% auto 20%;
  gap: 20px;
}

.card-title {
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
}

.card-description {
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
}

.card-contact-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  color: #212121;
  padding: 15px 10px;
  width: 40%;
  font-weight: bold;
  cursor: pointer;
  background-color: #ffffff;
  text-decoration: none;
  font-weight: normal;
}

.card-contact-button:hover {
  color: #212121;
}

@media screen and (max-width: 750px){
  .container {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
  }

  .card {
    left: 0;
    width: 60%;
  }

  .card-contact-button {
    width: 50%;
  }
}
</style>
