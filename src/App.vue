<template>
  <div id="app">
    <header class="flex items-center">
      <div class="container flex w-full items-center">
        <img src="./assets/logo.png" srcset="./assets/logo@2x.png 2x" />

        <div class="ml-auto">
          <label for="id_language" class="hidden xs:inline-block">
            Select language:
          </label>
          <select name="language" id="id_language" v-model="language">
            <option value="en">English</option>
            <option value="pl">Polish</option>
          </select>
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      language: 'en'
    };
  }
};
</script>

<style scoped lang="scss">
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23909090' d='M17 9.17a1 1 0 0 0-1.41 0L12 12.71 8.46 9.17a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42z'/%3E%3C/svg%3E");
  background-position: center right 6px;
  background-repeat: no-repeat;
  background-size: 20px;

  @apply appearance-none pl-3 pr-10 py-1 ml-4;
}
</style>
