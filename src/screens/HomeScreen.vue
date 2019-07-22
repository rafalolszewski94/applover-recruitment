<template>
  <div class="container mt-10">
    <form action="" class="my-6">
      <h1 class="mb-6">Login</h1>

      <div class="input-wrapper">
        <input
          type="text"
          name="email_address"
          id="id_email_address"
          placeholder="Email address"
          v-model="email"
        />
      </div>

      <div class="input-wrapper">
        <input
          type="password"
          name="password"
          id="id_password"
          placeholder="Password"
          v-model="password"
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
export default {
  name: 'HomeScreen',
  data() {
    return {
      email: '',
      password: '',
      remember_me: ''
    };
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
