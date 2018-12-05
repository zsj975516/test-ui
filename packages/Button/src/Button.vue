<template>
  <button class="u-button"
          :class="[
          'u-button-type__'+type,
          'u-button-size__'+size,
          {
          'is-disable':disabled,
          'is-plain':plain,
          'is-round':round,
          }
          ]"
          @click="$emit('click',$event)"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: "UButton",
    props: {
      type: {
        type: String,
        default: 'default',
      },
      size: {
        type: String,
        default: 'normal',
      },
      icon: {
        type: String,
        default: '',
      },
      plain: Boolean,
      disabled: Boolean,
      round: Boolean,
    }
  }
</script>
