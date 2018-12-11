<template>
  <div class="u-check-box">
    <div class="u-check-box__inner">
      <label class="u-check-box__content"
             :class="{
               'is-disabled':disabled,
              }"
             @click.stop>
        <span class="u-check-box__box"
              :class="{
               'is-checked':model,
               'is-indeterminate':indeterminate,
               'is-disabled':disabled,
               }"></span>
        <input class="u-check-box__input"
               type="checkbox"
               @change="handleChange"
               v-model="model"/>
        <span class="u-check-box__label" :class="{
               'is-checked':model,
        }">
          <slot></slot>
          <template v-if="!$slots.default">{{label}}</template>
          <template v-if="!$slots.default&&(trueLabel||falseLabel)&&model">{{trueLabel}}</template>
          <template v-if="!$slots.default&&(trueLabel||falseLabel)&&!model">{{falseLabel}}</template>
        </span>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UCheckBox",
    componentName: 'UCheckBox',
    data() {
      return {
        selfModel: false,
      }
    },
    props: {
      value: Boolean,
      indeterminate: Boolean,
      disabled: Boolean,
      label: String,
      trueLabel: String,
      falseLabel: String,
    },
    computed: {
      model: {
        get() {
          return this.value !== undefined ? this.value : this.selfModel;
        },
        set(val) {
          this.$emit('input', val);
          this.selfModel = val;
        }
      }
    },
    methods: {
      handleChange(evt) {
        this.$emit('change', this.selfModel, evt)
      }
    }
  }
</script>
