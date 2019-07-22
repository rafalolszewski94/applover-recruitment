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
