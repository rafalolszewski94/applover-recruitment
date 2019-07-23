<template>
  <div id="app">
    <error-bar />
    <header class="flex items-center">
      <div class="container flex w-full items-center">
        <img src="./assets/logo.png" srcset="./assets/logo@2x.png 2x" />

        <div class="ml-auto flex items-center">
          <label for="id_language" class="hidden xs:inline-block">
            Select language:
          </label>
          <select name="language" id="id_language" v-model="language">
            <option value="en">English</option>
            <option value="pl">Polish</option>
          </select>

          <div class="user" v-if="isLoggedIn">
            <div class="dropdown">
              <a href="#" class="toggle" @click="toggleDropdown"
                >My organization</a
              >
              <transition name="slide-in-out-small">
                <div v-if="dropdownVisible" v-on-clickaway="hideDropdown">
                  <a href="#" @click="logout">Logout</a>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </header>

    <router-view />
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import ProgressOverlay from './components/ProgressOverlay';

export default {
  name: 'App',
  mixins: [clickaway],
  components: {
    ProgressOverlay
  },
  data() {
    return {
      language: 'en',
      dropdownVisible: false
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isLoggedIn'];
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    hideDropdown() {
      this.dropdownVisible = false;
    },
    logout() {
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push({ name: 'LoginScreen' });
      });
    }
  }
};
</script>
