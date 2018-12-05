import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("./views/Home.vue"),
      props: {}
    },
    {
      path: '/doc',
      name: 'doc',
      component: () => import("./views/Doc.vue"),
      props: route => {
        let list = router.options.routes.find(item => item.name === 'doc').children;
        list = list.map(item => {
          return item.meta
        });
        return {list}
      },
      children: [
        {
          path: '/',
          name: 'index',
          meta: {
            name: '文档首页',
            path: '/doc'
          },
          component: () => import('./docs/index.md'),
        },
        {
          path: 'button',
          name: 'button',
          meta: {
            name: '按钮',
            path: '/doc/button'
          },
          component: () => import('./docs/button.md'),
        }
      ]
    },
  ]
});

export default router;
