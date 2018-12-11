<template>
  <div class="u-switch">
    <div class="u-switch__inner">
      <label class="u-switch__content"
             :class="{
                'is-disable':disabled,
             }">
        <span class="u-switch__label"
              v-if="textPosition==='left'"
              :class="[textPosition,{
               'is-checked':model,
               'is-disable':disabled,
              }]">
          {{model?trueLabel:falseLabel}}
        </span>
        <span class="u-switch__box"
              :class="{
               'is-checked':model,
              }">
          <span class="u-switch__box__ball"></span>
        </span>
        <input class="u-switch__input"
               type="checkbox"
               @change="handleChange"
               v-model="model"/>
        <span class="u-switch__label"
              v-if="textPosition!=='left'"
              :class="[textPosition,{
              true_label:model,
              false_label:!model,
               'is-checked':model,
               'is-disable':disabled,
              }]">
          {{model?trueLabel:falseLabel}}
        </span>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "USwitch",
    componentName: 'USwitch',
    data() {
      return {
        selfModel: false,
      }
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
        this.$emit('change', this.selfModel, evt);
      }
    },
    props: {
      value: Boolean,
      disabled: Boolean,
      trueLabel: {
        type: String,
        validator(value) {
          if (value.length > 1) throw new Error("[Switch] true-label 最多一个字");
          return true;
        }
      },
      falseLabel: {
        type: String,
        validator(value) {
          if (value.length > 1) throw new Error("[Switch] false-label 最多一个字");
          return true;
        }
      },
      textPosition: String,
    }
  }
</script>

<style scoped>

</style>
