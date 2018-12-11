const default_options = {
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
};

import Vue from 'vue/dist/vue'
import messageBox from './MessageBox.vue'

const MessageBoxConstructor = Vue.extend(messageBox);

import {merge} from '../../util';


let instance;
let currentMsg;
let msgList = [];

const defaultCallback = action => {

  if (!currentMsg) return;

  let callback = currentMsg.callback;

  if (typeof callback === 'function') {
    if (instance.showInput) {
      callback(instance.inputValue, action);
    } else {
      callback(action);
    }
  }

  if (currentMsg.resolve) {
    if (action === 'confirm') {
      if (instance.showInput) {
        currentMsg.resolve({value: instance.inputValue, action});
      } else {
        currentMsg.resolve(action);
      }
    } else if (currentMsg.reject && (action === 'cancel' || action === 'close')) {
      currentMsg.reject(action);
    }
  }

};


const showNextMsg = () => {
  if (!instance) {
    instance = new MessageBoxConstructor({
      el: document.createElement('div')
    })
  }
  instance.action = '';

  if (!msgList.length) return;
  currentMsg = msgList.shift();
  let options = currentMsg.options;
  for (let prop in options) {
    if (options.hasOwnProperty(prop)) {
      instance[prop] = options[prop];
    }
  }
  if (options.callback === undefined) {
    instance.callback = defaultCallback;
  }

  let oldCb = instance.callback;
  instance.callback = (action, instance) => {
    oldCb(action, instance);
    showNextMsg();
  };

  ['modal', 'showClose', 'closeOnClickModal', 'closeOnPressEscape', 'closeOnHashChange'].forEach(prop => {
    if (instance[prop] === undefined) {
      instance[prop] = true;
    }
  });

  document.body.appendChild(instance.$el);

  Vue.nextTick(() => {
    instance.visible = true;
  });

  console.log(instance)

};


const MessageBox = function (options, callback) {

  if (typeof Promise !== 'undefined') {
    return new Promise((resolve, reject) => {
      msgList.push({
        options: merge({}, default_options, options),
        callback: callback,
        resolve: resolve,
        reject: reject
      });
      showNextMsg();
    });
  } else {
    msgList.push({
      options: merge({}, default_options, options),
      callback: callback
    });
    showNextMsg();
  }
};

MessageBox.alert = (message, title, options) => {
  return MessageBox(merge({
    title: title,
    message: message,
    $type: 'alert',
    closeOnPressEscape: false,
    closeOnClickModal: false,
    showClose: false,
  }, options));
};
MessageBox.confirm = (message, title, options) => {
  return MessageBox(merge({
    title: title,
    message: message,
    $type: 'confirm',
    closeOnPressEscape: false,
    closeOnClickModal: false,
    showCancelButton: true,
  }, options));
};
MessageBox.prompt = (message, title, options) => {
  return MessageBox(merge({
    title: title,
    message: message,
    $type: 'prompt',
    closeOnPressEscape: false,
    closeOnClickModal: false,
    showInput: true,
    showCancelButton: true,
  }, options));
};

export default MessageBox;
export {MessageBox};
