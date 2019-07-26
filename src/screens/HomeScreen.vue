<template>
  <div class="container mt-10 mb-6">
    <div class="wrapper">
      <div class="steps">
        <ul>
          <li
            v-for="(step, i) in steps"
            :key="`Step${i}`"
            :class="{ active: $router.currentRoute.meta.id === step.id }"
          >
            <span
              class="step"
              :class="{ 'hide-after': i + 1 === steps.length }"
            ></span>
            <span>{{ $t('step') }} {{ i + 1 }}</span>
            <h6>{{ step.title }}</h6>
          </li>
        </ul>
      </div>

      <div class="configurator">
        <div class="display">
          <div class="door-itself">
            <table class="w-full">
              <tbody>
                <tr>
                  <td></td>
                  <td class="relative" colspan="2">
                    <div class="flex justify-center mx-1">
                      <div class="door-width">{{ doorWidth * doorType }}</div>
                      <span class="pipe"></span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="relative">
                    <div class="flex flex-col">
                      <div class="door-height">{{ doorHeight }}</div>
                      <span class="pipe"></span>
                    </div>
                  </td>
                  <td
                    v-for="(wing_count, i) in doorType"
                    :key="`DoorWing(${i})`"
                  >
                    <table
                      class="doors"
                      :style="{
                        width: `${doorWidth}px`,
                        height: `${doorHeight}px`,
                        color: doorColor
                      }"
                    >
                      <tbody>
                        <tr
                          v-for="beam in doorBeams"
                          :key="`Beam${beam}`"
                          class="beam"
                        >
                          <td
                            v-for="post in doorPosts"
                            :key="`Post${post}`"
                            class="post"
                          ></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td
                    class="relative border-r border-2 border-white"
                    v-for="(wing_count, i) in doorType"
                    :key="`DoorBottomWidth(${i})`"
                  >
                    <div class="flex justify-center mx-1">
                      <div class="door-width">{{ doorWidth }}</div>
                      <span class="pipe"></span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="sidebar">
          <router-view></router-view>

          <div class="mt-auto flex flex-col">
            <button @click="prevStep" class="outline">
              {{ $t('actions.back') }}
            </button>
            <button @click="nextStep">
              {{ $t('actions.next_step') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeScreen',
  computed: {
    steps() {
      return [
        {
          id: 1,
          title: this.$i18n.t('steps.choose_door')
        },
        {
          id: 2,
          title: this.$i18n.t('steps.choose_division')
        },
        {
          id: 3,
          title: this.$i18n.t('steps.choose_color')
        }
      ];
    },
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
    doorBeams() {
      return this.$store.getters['configurator/doorBeams'];
    },
    doorPosts() {
      return this.$store.getters['configurator/doorPosts'];
    },
    doorColor() {
      return this.$store.getters['configurator/doorColor'];
    }
  },
  methods: {
    prevStep() {
      switch (this.$router.currentRoute.name) {
        case 'ChooseDivision':
          this.$router.push('/door');
          break;
        case 'ChooseColor':
          this.$router.push('/division');
          break;
        default:
          break;
      }
    },
    nextStep() {
      switch (this.$router.currentRoute.name) {
        case 'ChooseDoor':
          this.$router.push('/division');
          break;
        case 'ChooseDivision':
          this.$router.push('/color');
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 780px;

  @apply mx-auto;
}

.steps {
  max-width: 400px;
  margin-bottom: 20px;

  @apply w-full mx-auto;

  ul {
    list-style: none;
    display: flex;

    @apply flex justify-center;
  }

  li {
    min-width: 146px;

    @apply inline-flex flex-col items-center justify-center;

    .step {
      width: 46px;
      height: 46px;
      content: '';
      border: 20px solid #cddbe5;
      background-color: #6991b2;

      @apply rounded-full relative;

      &::after {
        background-color: #ebf7ff;
        height: 2px;
        width: 100px;
        left: 26px;
        top: 2px;
        content: '';

        @apply absolute;
      }

      &.hide-after {
        &::after {
          display: none;
        }
      }
    }

    &.active {
      .step {
        background-color: white;
        border: 20px solid #95a3ad;
      }
    }
  }

  span:not([class]) {
    margin-top: 10px;
  }

  span:not([class]),
  h6 {
    font-size: 10px;

    @apply uppercase text-center font-bold;
  }
}

.configurator {
  @apply flex justify-between;
}

.display {
  min-height: 470px;
  overflow: auto;

  @apply border flex-grow flex items-center justify-center;
}

.pipe {
  background-color: #707070;
}

.door-width,
.door-height {
  z-index: 1;
  border-color: #707070;
  font-size: 12px;
  padding: 2px 8px;

  @apply border bg-white;
}

.door-height {
  + .pipe {
    left: 50%;
    transform: translateX(-50%);
    @apply absolute w-px h-full top-0;

    &::before,
    &::after {
      height: 1px;
      width: 14px;
      background-color: #707070;
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin-right: 0.5px;
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }
  }
}

.door-width {
  + .pipe {
    top: 50%;
    transform: translateY(-50%);
    @apply absolute h-px w-full;

    &::before,
    &::after {
      height: 14px;
      width: 1px;
      background-color: #707070;
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-top: 0.5px;
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }
  }
}

.door-itself {
  @apply flex relative;
}

.sidebar {
  margin-left: 30px;

  @apply flex flex-col;

  button[type='submit'] {
    margin-top: auto;
  }

  button {
    transition: background-color 0.1s ease, box-shadow 0.2s ease;
    background-color: #6f91aa;
    font-size: 14px;
    height: 30px;

    @apply text-white rounded-none py-0 uppercase;

    &:not(.locked):hover {
      background-color: darken(#6f91aa, 5%);

      @apply shadow-md;
    }

    &.outline {
      border-color: #6f91aa;
      color: #6f91aa;

      @apply bg-white border-2 mb-1 mt-4;

      &:not(.locked):hover {
        background-color: #6f91aa;

        @apply shadow-md text-white;
      }
    }
  }
}

table.doors {
  width: 145px;
  table-layout: fixed;
  border: 0;
  max-width: 100%;
}

.beam {
  border-bottom: 7px solid currentColor;
  height: 60px;

  &:first-of-type {
    border-top: 7px solid currentColor;
  }
}

.post {
  border-right: 7px solid currentColor;

  &:first-of-type {
    border-left: 7px solid currentColor;
  }
}

.input-wrapper {
  @apply flex items-center mb-3;
}
</style>
