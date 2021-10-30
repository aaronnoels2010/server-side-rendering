declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module '@nuxt/types' {
  // @ts-ignore
  import { Auth } from '@nuxtjs/auth'
  interface Context {
    $auth: Auth
  }
}
