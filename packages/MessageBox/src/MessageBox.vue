<template>
  <div class="u-message-box" v-show="visible">
    <div class="u-message-box__inner">
      <div class="u-message-box__title">{{title}}</div>
      <div class="u-message-box__close" @click="handleAction('close')" v-if="showClose">X</div>
      <div class="u-message-box__message">
        <slot>
          <div class="u-message-box__message__content">{{message}}</div>
          <input class="u-message-box__message__input"
                 ref="input"
                 v-if="showInput"
                 v-model="inputValue"
                 :type="inputType"
                 @input="validate"
                 :placeholder="inputPlaceholder">
          <div class="u-message-box__message__input__error" :title="editorErrorMessage">{{editorErrorMessage}}</div>
        </slot>
      </div>
      <div class="u-message-box__button">
        <button class="u-message-box__button__confirm" ref="confirm" @click="handleAction('confirm')"
                v-if="showConfirmButton&&confirmButtonPosition==='left'">{{confirmButtonText}}
        </button>
        <button class="u-message-box__button__cancel" @click="handleAction('cancel')" v-if="showCancelButton">
          {{cancelButtonText}}
        </button>
        <button class="u-message-box__button__confirm" ref="confirm" @click="handleAction('confirm')"
                v-if="showConfirmButton&&confirmButtonPosition==='right'">{{confirmButtonText}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "MessageBox",
    data() {
      return {
        title: '',//标题
        message: '',//内容
        type: '',//类型
        iconClass: '',//图标类
        showInput: false,//是否显示输入框
        showClose: true,//是否显示关闭按钮
        lockScroll: true,//是否锁定滚动
        closeOnClickModal: true,//点击模态框是否关闭
        closeOnPressEscape: true,//按ESC键是否关闭
        closeOnHashChange: true,//地址hash改变是否关闭
        inputValue: null,//输入框默认值
        inputPlaceholder: '',//输入框placeholder
        inputType: 'text',//输入框的类型
        inputPattern: null,//输入框的验证正则
        inputValidator: null,//输入框的验证函数
        inputErrorMessage: '',//输入框验证失败提示语
        showConfirmButton: true,//是否显示确认按钮
        showCancelButton: false,//是否显示取消按钮
        confirmButtonPosition: 'right',//确认按钮的位置
        confirmButtonText: '确认',//确认按钮的文字
        cancelButtonText: '取消',//取消按钮的文字
        beforeClose: null,//关闭前的回调
        visible: false,
        action: '',
        editorErrorMessage: '',
        uid: 1,
      }
    },
    watch: {
      visible(val) {
        if (val) {
          this.uid++;
          if (this.$type === 'alert' || this.$type === 'confirm') {
            this.$nextTick(() => {
              if (this.$refs.confirm) this.$refs.confirm.focus();
            });
          } else if (this.$type === 'prompt') {
            this.$nextTick(() => {
              if (this.$refs.input) this.$refs.input.focus();
            });
          }
        }
      }
    },
    methods: {
      getSafeClose() {
        const currentId = this.uid;
        return () => {
          this.$nextTick(() => {
            if (currentId === this.uid) this.doClose();
          });
        };
      },
      validate() {
        if (this.$type === 'prompt') {
          const inputPattern = this.inputPattern;
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage || "输入有误，请检查！";
            return false;
          }
          const inputValidator = this.inputValidator;
          if (typeof inputValidator === 'function') {
            const validateResult = inputValidator(this.inputValue);
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage || "输入有误，请检查！";
              return false;
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult;
              return false;
            }
          }
        }
        this.editorErrorMessage = '';
        return true;
      },
      handleAction(action) {
        this.action = action;

        if (this.$type === 'prompt' && this.action === 'confirm' && !this.validate()) return;

        console.log(this.$type === 'prompt' && this.action === 'confirm' && !this.validate())

        if (typeof this.beforeClose === 'function') {
          this.close = this.getSafeClose();
          this.beforeClose(action, this.close, this);
        } else {
          this.doClose();
        }
      },
      doClose() {
        if (!this.visible) return;
        this.visible = false;
        setTimeout(() => {
          if (this.action) {
            if (this.action === 'confirm' && this.showInput) {
              this.callback(this.action, this.inputValue);
            } else {
              this.callback(this.action, this);
            }

            this.editorErrorMessage = '';
          }
        });
      },
    },
    props: {}
  }
</script>

<style scoped>

</style>
