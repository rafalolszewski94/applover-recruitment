<template>
  <div class="container mt-10 mb-6">
    <form action="" @submit.prevent="signIn">
      <h1 class="mb-6">Login</h1>

      <div class="input-wrapper">
        <input
          type="text"
          name="email_address"
          id="id_email_address"
          placeholder="Email address"
          v-model="email"
          required
        />
      </div>

      <div class="input-wrapper">
        <input
          type="password"
          name="password"
          id="id_password"
          placeholder="Password"
          v-model="password"
          required
        />
      </div>

      <div class="input-wrapper">
        <input
          type="checkbox"
          name="remember_me"
          id="id_remember_me"
          v-model="remember_me"
        />
        <label for="id_remember_me">Keep me logged in</label>
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import Api from '../api';

export default {
  name: 'HomeScreen',
  data() {
    return {
      email: '',
      password: '',
      remember_me: ''
    };
  },
  methods: {
    showErrorBar(content = '') {
      const params = {
        content
      };
      this.$errorBar.show(params);
    },
    signIn() {
      Api('/api/v1/login', {
        method: 'POST',
        body: {
          email: this.email,
          passsword: this.password
        }
      })
        .then(response => {
          return response;
        })
        .catch(error => {
          if (error.statusCode === 401) {
            this.showErrorBar('Invalid email or password');
          }
        });
    }
  }
};
</script>

<style scoped lang="scss">
form {
  max-width: 400px;

  @apply w-full mx-auto;
}

h1 {
  @apply text-center;
}
</style>
