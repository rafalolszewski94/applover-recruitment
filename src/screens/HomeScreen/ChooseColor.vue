<template>
  <div>
    <h6>Door color</h6>

    <div class="flex">
      <div
        class="input-wrapper mr-6"
        v-for="(color, i) in doorColors"
        :key="`Color(${i})`"
      >
        <span
          class="colorDisplay"
          :style="{ backgroundColor: color.hex }"
        ></span>
        <input
          type="radio"
          name="door_color"
          :id="`id_color_${i}`"
          :value="color.hex"
          v-model="doorColor"
        />
        <label :for="`id_color_${i}`">{{ color.name }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import { DOOR_COLORS } from '../../constants';

export default {
  name: 'ChooseColor',
  computed: {
    doorColors() {
      return Object.values(DOOR_COLORS);
    },
    doorColor: {
      get() {
        return this.$store.getters['configurator/doorColor'];
      },
      set(val) {
        this.$store.dispatch('configurator/setDoorColor', val);
      }
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

.colorDisplay {
  height: 35px;
  width: 35px;

  @apply inline-block rounded-full;
}
</style>
