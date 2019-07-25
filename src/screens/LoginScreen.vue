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

      <button type="submit" :disabled="lock" :class="{ locked: lock }">
        <span class="loader" v-if="lock"></span>
        <template v-else>
          {{ $t('login') }}
        </template>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HomeScreen',
  data() {
    return {
      email: 'login@applover.pl',
      password: 'password123',
      remember_me: false,
      lock: false
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
      const { email, password } = this;
      const rememberMe = this.remember_me;

      this.lock = true;

      this.$store
        .dispatch('auth/login', { email, password, rememberMe })
        .then(() => {
          this.lock = false;
          this.$router.push({ name: 'ChooseDoor' });
        })
        .catch(error => {
          if (error.statusCode === 401) {
            this.showErrorBar('Invalid email or password');
          } else if (error.statusCode === 500) {
            this.showErrorBar('Internal server error, please try again!');
          } else {
            this.showErrorBar('Unknown error, please try again!');
          }
          this.lock = false;
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

button[type='submit'] {
  transition: background-color 0.1s ease, box-shadow 0.2s ease;

  @apply rounded bg-green text-white border border-green;

  &:not(.locked):hover {
    @apply bg-green-400 shadow-md;
  }
}
</style>
