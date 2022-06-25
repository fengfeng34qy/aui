import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/layout'
import navConfig from './nav.config';

Vue.use(Router)


const LOAD_MAP = {
  'zh-CN': name => {
    return r => require.ensure([], () =>
      r(require(`../pages/zh-CN/${name}.vue`)),
    'zh-CN');
  }
};

const load = function(lang, path) {
  console.log(lang);
  return LOAD_MAP[lang](path);
};

const LOAD_DOCS_MAP = {
  'zh-CN': path => {
    return r => require.ensure([], () =>
      r(require(`../docs/zh-CN${path}.md`)),
    'zh-CN');
  }
};

const loadDocs = function(lang, path) {
  return LOAD_DOCS_MAP[lang](path);
};

const registerRoute = (navConfig) => {
  let route = [];
  Object.keys(navConfig).forEach((lang, index) => {
    let navs = navConfig[lang];
    // route.push({
    //   path: `/`,
    //   redirect: `/zh-CN/component/layout`,
    //   component: load('zh-CN', 'component'),
    //   children: []
    // });
    route.push({
      path: `/${ lang }/component`,
      redirect: `/${ lang }/component/button`,
      component: load(lang, 'component'),
      children: []
    });
    navs.forEach(nav => {
      if (nav.href) return;
      if (nav.groups) {
        nav.groups.forEach(group => {
          group.list.forEach(nav => {
            addRoute(nav, lang, index);
          });
        });
      } else if (nav.children) {
        nav.children.forEach(nav => {
          addRoute(nav, lang, index);
        });
      } else {
        addRoute(nav, lang, index);
      }
    });
  });
  function addRoute(page, lang, index) {
    const component = loadDocs(lang, page.path);
    let child = {
      path: page.path.slice(1),
      meta: {
        title: page.title || page.name,
        description: page.description,
        lang
      },
      name: 'component-' + lang + (page.title || page.name),
      component: component.default || component
    };

    route[index].children.push(child);
  }
  route.push({
    path: `/`,
    redirect: `/zh-CN/component/a-dialog`
  })
  return route;
};

let route = registerRoute(navConfig);
console.log(route);

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'Layout',
  //     component: Layout
  //   }
  // ]
  routes: route
})
