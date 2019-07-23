<template>
  <div class="progress-overlay">
    <canvas ref="blur"></canvas>
    <h2>Processing...</h2>

    <div class="progress-overlay-wrapper">
      <span class="progress-bar"></span>
      <span class="progress-percent">{{ progress }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressOverlay',
  data() {
    return {
      progress: 60
    };
  },
  mounted() {
    const canvas = this.$refs.blur;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(173,178,181,0.83)';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.filter = 'blur(5px)';
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
}
</style>
