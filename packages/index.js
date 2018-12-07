let files = require.context('/', true, /\.js$/);

const components = [];

files.keys().map(key => {
  if (key === './index.js') return;
  if (files(key).default) {
    components.push(files(key).default);
  } else {
    components.push(files(key));
  }
});

let exp = {};

const install = function (Vue) {
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component);
    exp[component.name] = component;
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

exp.install = install;

export default exp
