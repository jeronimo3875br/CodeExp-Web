<template>
  <form class="login-form" @submit.prevent.stop="sendContactMessage">
    <h1>Contact</h1>
    <input
      v-model="userLogin.name"
      type="text"
      placeholder="Name"
    />
    <input
      v-model="userLogin.email"
      type="email"
      placeholder="E-mail"
    />
    <textarea
      v-model="userLogin.message"
      placeholder="Message..."
    ></textarea>
    <input type="submit" />
    <p>
      Upon submission, your data will be transferred to a service area and you will receive an email with a response to your contact request, within 24 hours.
    </p>
  </form>
</template>

<script lang="ts">
  import { Component, Vue } from "nuxt-property-decorator";

  interface IUserLogin {
    name: string;
    email: string;
    message: string;
  }

  @Component
  export default class LoginComponent extends Vue {
    private userLogin: IUserLogin = {
      name: "",
      email: "",
      message: ""
    }

    private sendContactMessage(): void {
      console.log(this.userLogin);
    }
  }
</script>

<style scoped>
.login-form {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  width: 100%;
}

.login-form input, textarea {
  width: 70%;
  padding: 20px;
  background: transparent;
  backdrop-filter: blur(10px);
  margin-bottom: 20px;
  border-radius: 10px;
  color: #808080;
  border: 0.7px solid #dddddd;
}

.login-form input[type="submit"]{
  border-radius: 100px;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 0px 0px 10px rgb(0 0 0 / 3%);
}

.login-form p {
  color: #505050;
  width: 70%;
}

.login-form h1 {
  color: #808080;
  margin-bottom: 20px;
}

@media screen and (max-width: 750px){
  .login-form input, textarea {
    width: 90%;
  }

  .login-form input:focus > .login-form {
    background: red;
  }
}
</style>
