<template>
  <transition name="slide-in-out">
    <div class="error-bar" v-if="visible">
      <p>{{ content }}</p>
      <button class="modal-button" @click="hide">
        <svg
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M13.41 12l6.3-6.29a1 1 0 1 0-1.42-1.42L12 10.59l-6.29-6.3a1 1 0 0 0-1.42 1.42l6.3 6.29-6.3 6.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l6.29-6.3 6.29 6.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
          />
        </svg>
      </button>
    </div>
  </transition>
</template>

<script>
import ErrorBar from './index';

export default {
  name: 'ErrorBar',
  data() {
    return {
      visible: false,
      content: '',
      onClose: {},
      timeout: 4000
    };
  },
  watch: {
    visible(newVal) {
      const component = this;

      if (newVal) {
        setTimeout(this.hide, component.timeout);
      }
    }
  },
  methods: {
    hide() {
      this.visible = false;
    },
    show(params) {
      this.visible = true;
      this.content = params.content;
      this.onClose = params.onClose;

      if (params.timeout) this.timeout = params.timeout;
    }
  },
  beforeMount() {
    ErrorBar.instance.$on('show', params => {
      this.show(params);
    });
  }
};
</script>

<style scoped></style>
