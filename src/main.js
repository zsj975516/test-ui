import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;


import DemoBlock from './components/DemoBlock.vue'

Vue.component(DemoBlock.name, DemoBlock)


import testUI from '../packages/index'
// import '../packages/theme-default/index.md.scss'

Vue.use(testUI);




new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
