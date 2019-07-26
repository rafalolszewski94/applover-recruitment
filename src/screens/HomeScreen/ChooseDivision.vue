<template>
  <div>
    <h6>{{ $t('door_division') }}</h6>

    <div class="input-wrapper">
      <label for="id_beams">{{ $t('number_of_beams') }}</label>
      <input
        type="number"
        min="1"
        :max="CONSTANTS.MAX_DOOR_BEAMS"
        name="door_beams"
        id="id_beams"
        v-model="doorBeams"
        v-validate.continues="{
          min_value: 1,
          max_value: 4
        }"
        data-vv-as="door beams"
      />
      <ul class="v-errors" v-if="errors.has('door_beams')">
        <li
          v-for="(error, i) in errors.collect('door_beams')"
          :key="`ErrorBeams(${i})`"
        >
          {{ error }}
        </li>
      </ul>
    </div>
    <div class="input-wrapper">
      <label for="id_posts">{{ $t('number_of_posts') }}</label>
      <input
        type="number"
        min="1"
        :max="CONSTANTS.MAX_DOOR_POSTS"
        name="door_posts"
        id="id_posts"
        v-model="doorPosts"
        v-validate.continues="{
          min_value: 1,
          max_value: 4
        }"
        :data-vv-as="$t('door_error_vv_posts')"
      />
      <ul class="v-errors" v-if="errors.has('door_posts')">
        <li
          v-for="(error, i) in errors.collect('door_posts')"
          :key="`ErrorPosts(${i})`"
        >
          {{ error }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { MAX_DOOR_BEAMS, MAX_DOOR_POSTS } from '../../constants';

export default {
  name: 'ChooseDivision',
  computed: {
    doorBeams: {
      get() {
        return this.$store.getters['configurator/doorBeams'];
      },
      set(val) {
        this.$store.dispatch('configurator/setDoorBeams', val);
      }
    },
    doorPosts: {
      get() {
        return this.$store.getters['configurator/doorPosts'];
      },
      set(val) {
        this.$store.dispatch('configurator/setDoorPosts', val);
      }
    },
    CONSTANTS() {
      return {
        MAX_DOOR_BEAMS,
        MAX_DOOR_POSTS
      };
    }
  }
};
</script>

<style scoped>
h6 {
  border-color: #f7f7f7;
  margin-bottom: 16px;

  @apply border-b pb-1;
}

input[type='number'] {
  width: 60px;

  @apply inline-flex py-1 px-1 ml-4;
}

.input-wrapper {
  @apply flex items-center mb-3;
}

label {
  min-width: 160px;
}
</style>
