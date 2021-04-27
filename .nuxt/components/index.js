export { default as Logo } from '../../components/Logo.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
