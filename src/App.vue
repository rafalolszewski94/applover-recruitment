<template>
  <div id="app">
    <error-bar />
    <progress-overlay :progress="40" v-if="showProgressOverlay" />
    <header class="flex items-center">
      <div class="container flex w-full items-center">
        <router-link to="/">
          <img src="./assets/logo.png" srcset="./assets/logo@2x.png 2x" />
        </router-link>

        <div class="ml-auto flex items-center">
          <label for="id_language" class="hidden sm:inline-block">
            {{ $t('header.select_language') }}
          </label>
          <select name="language" id="id_language" v-model="currentLangCode">
            <option
              v-for="(lang, i) in langs"
              :key="`Lang${i}`"
              :value="lang.code"
            >
              {{ lang.display }}
            </option>
          </select>

          <div class="user" v-if="isLoggedIn">
            <div class="dropdown">
              <a href="#" class="toggle" @click="toggleDropdown">
                {{ $t('header.my_organization') }}
              </a>
              <transition name="slide-in-out-small">
                <div v-if="dropdownVisible" v-on-clickaway="hideDropdown">
                  <span>
                    <small>{{ $t('organization.name') }}</small>
                    {{ organization.name }}
                  </span>
                  <span v-if="organization.email">
                    <small>{{ $t('organization.email') }}</small>
                    {{ organization.email }}
                  </span>
                  <span v-if="organization.phone_number">
                    <small>{{ $t('organization.phone_number') }}</small>
                    {{ organization.phone_number }}
                  </span>
                  <span v-if="organization.address_line_1">
                    <small>{{ $t('organization.address_line_1') }}</small>
                    {{ organization.address_line_1 }}
                  </span>
                  <span v-if="organization.address_line_2">
                    <small>{{ $t('organization.address_line_2') }}</small>
                    {{ organization.address_line_2 }}
                  </span>
                  <span v-if="organization.city">
                    <small>{{ $t('organization.city') }}</small>
                    {{ organization.city }}
                  </span>
                  <span>
                    <small>{{ $t('organization.postal_code') }}</small>
                    {{ organization.postal_code }}
                  </span>
                  <span class="divider"></span>
                  <a href="#" @click="logout">{{ $t('logout') }}</a>
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
import Api from './api';

export default {
  name: 'App',
  mixins: [clickaway],
  components: {
    ProgressOverlay
  },
  data() {
    return {
      langs: [
        { code: 'en', display: 'English' },
        { code: 'pl', display: 'Polski' }
      ],
      dropdownVisible: false,
      showProgressOverlay: false,
      organization: {}
    };
  },
  created() {
    this.fetchOrganization();
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isLoggedIn'];
    },
    currentLangCode: {
      get() {
        return this.$store.getters['locale/currentLangCode'];
      },
      set(val) {
        this.$store.dispatch('locale/setLanguage', val).then(() => {
          this.$i18n.locale = val;
        });
      }
    }
  },
  methods: {
    fetchOrganization() {
      Api('/api/v1/organization', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Host: 'example.org',
          Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJvcmdhbml6YXRpb25faWQiOjUsImV4cCI6MTU2NTMwOTgwNCwiY3JlYXRlZF9hdCI6IjIwMTktMDctMjYgMDA6MTY6NDQgVVRDIn0.nkAzmcacppLZxcw7hS4rW4WQYUefP2OdfavUWfZ2zxU'
        }
      }).then(response => {
        this.organization = response;
      });
    },
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    hideDropdown() {
      this.dropdownVisible = false;
    },
    logout() {
      this.$store.dispatch('auth/logout').then(() => {
        this.$router.push({ name: 'LoginScreen' });
        this.hideDropdown();
      });
    }
  }
};
</script>
