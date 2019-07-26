<template>
  <div>
    <h6>{{ $t('door_type') }}</h6>

    <div class="input-wrapper">
      <input
        type="radio"
        name="door_type"
        id="id_single"
        :value="SINGLE_WING_TYPE"
        v-model="doorType"
      />
      <label for="id_single">{{ $t('door_wing_single') }}</label>
    </div>
    <div class="input-wrapper">
      <input
        type="radio"
        name="door_type"
        id="id_double"
        :value="DOUBLE_WING_TYPE"
        v-model="doorType"
      />
      <label for="id_double">{{ $t('door_wing_double') }}</label>
    </div>

    <h6 class="mt-8">{{ $t('door_size') }}</h6>

    <div class="input-wrapper">
      <label for="id_door_width" class="w-16">{{ $t('width') }}</label>
      <input
        type="number"
        :min="100"
        :max="160"
        id="id_door_width"
        v-model="doorWidth"
        name="door_width"
      />
      <span class="ml-2">cm</span>
    </div>
    <div class="input-wrapper">
      <label for="id_door_height" class="w-16">{{ $t('height') }}</label>
      <input
        type="number"
        :min="200"
        :max="300"
        id="id_door_height"
        v-model="doorHeight"
        name="door_height"
      />
      <span class="ml-2">cm</span>
    </div>
  </div>
</template>

<script>
import { DOUBLE_WING_TYPE, SINGLE_WING_TYPE } from '../../constants';

export default {
  name: 'ChooseDoor',
  computed: {
    doorType: {
      get() {
        return this.$store.getters['configurator/doorType'];
      },
      set(val) {
        this.$store.dispatch('configurator/setDoorType', val);
      }
    },
    doorWidth: {
      get() {
        return this.$store.getters['configurator/doorWidth'];
      },
      set(val) {
        this.$store.dispatch('configurator/setDoorWidth', val);
      }
    },
    doorHeight: {
      get() {
        return this.$store.getters['configurator/doorHeight'];
      },
      set(val) {
        this.$store.dispatch('configurator/setDoorHeight', val);
      }
    },
    SINGLE_WING_TYPE() {
      return SINGLE_WING_TYPE;
    },
    DOUBLE_WING_TYPE() {
      return DOUBLE_WING_TYPE;
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
</style>
