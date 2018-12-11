let files = require.context('/', true, /\.js$/);
import MessageBox from './MessageBox/index'

const components = [];

files.keys().map(key => {
  if (key === './index.js') return;

  let component = files(key).default ? files(key).default : files(key);

  if (component.componentName) {
    components.push(component);
  }
});

let exp = {};

const install = function (Vue) {
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.componentName, component);
    exp[component.componentName] = component;
  });

  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

exp.install = install;

export default exp
