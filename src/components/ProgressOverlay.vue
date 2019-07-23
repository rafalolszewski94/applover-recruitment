<template>
  <div class="progress-overlay">
    <h2>Processing...</h2>

    <div class="progress-overlay-wrapper" ref="barWrapper">
      <span class="progress-bar" ref="bar" :style="{ width: barWidth }"></span>
      <span class="progress-percent" ref="progress">{{ progress }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressOverlay',
  props: {
    progress: {
      default: 0,
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isMounted: false
    };
  },
  mounted() {
    this.isMounted = true;
  },
  computed: {
    barWidth() {
      /* eslint-disable consistent-return */
      if (!this.isMounted) return;
      const maxBarWidth =
        this.$refs.barWrapper.clientWidth -
        this.$refs.progress.clientWidth -
        28; // 28 = paddings

      const calculatedWidth = (this.progress / 100) * maxBarWidth;
      if (calculatedWidth > maxBarWidth) return `${maxBarWidth}px`;
      return `${calculatedWidth}px`;
      /* eslint-enable consistent-return */
    }
  }
};
</script>

<style scoped lang="scss">
.progress-overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-color: rgba(173, 178, 181, 0.83);

  @apply text-white flex justify-center items-center flex-col;
}

h2 {
  margin-bottom: 50px;
  font-size: 24px;
  font-weight: normal;

  @apply leading-tight;
}

.progress-overlay-wrapper {
  max-width: 500px;
  height: 32px;
  padding: 6px 7px;

  @apply w-full rounded-full border border-white flex items-center pr-4 leading-tight;
}

.progress-bar {
  height: 100%;
  min-width: 18px;
  margin-right: 7px;
  transition: width 0.1s ease;

  @apply rounded-full bg-white;
}

.progress-percent {
  @apply ml-auto;
}
</style>
