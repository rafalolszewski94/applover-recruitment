<template>
  <div class="progress-overlay">
    <canvas ref="blur-canvas"></canvas>
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
    const canvas = document.getElementById('blur');
    const ctx = canvas.getContext('2d');
    ctx.filter = 'blur(15px)';
    ctx.fillStyle = {
      type: String,
      default: '#F00'
    };
    ctx.fill();
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

  canvas {
    height: 100%;
    width: 100%;
  }
}
</style>
