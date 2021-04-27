import Vue from 'vue'

const components = {
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
