<template>
  <div class="container mt-10 mb-6">
    <h1>Home screen elloooo</h1>

    <div class="wrapper">
      <div class="steps">
        <ul>
          <li>
            <span>Step 1</span>
            <h6>Choose door</h6>
          </li>
          <li>
            <span>Step 2</span>
            <h6>Choose door division</h6>
          </li>
          <li>
            <span>Step 3</span>
            <h6>Choose color</h6>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeScreen'
};
</script>

<style scoped lang="scss">
h1 {
  @apply text-center;
}

.wrapper {
  max-width: 780px;

  @apply mx-auto;
}
</style>
