import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

let docs = require.context('./docs', true, /\.md$/);

let config = require('./docs/config');

let doc_children = [];

docs.keys().map(key => {
  let newKey = key.replace(/\.\/|\.md/ig, '');
  if (!config[newKey]) return;
  let child = {
    path: `${newKey}`,
    name: newKey,
    meta: {
      name: config[newKey].name,
      order: config[newKey].order,
      path: `/doc/${newKey}`,
    },
    component: docs(key).default,
  };
  doc_children.push(child);
});

doc_children.push({
  path: '/',
  redirect: 'index',
});

export default new Router({
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
      path: '/test',
      name: 'test',
      component: () => import("./views/Test.vue"),
      props: {}
    },
    {
      path: '/doc',
      name: 'doc',
      component: () => import("./views/Doc.vue"),
      props: route => {
        let list = doc_children.filter(item => item.meta).map(item => item.meta);
        let currentPath = route.path;
        list.sort((prev, next) => prev.order - next.order);
        return {list, currentPath}
      },
      children: doc_children
    },
  ]
});
