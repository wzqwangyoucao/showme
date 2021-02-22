declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.name' {
  interface name {
    name: string
  }
  const a:name
  export default a
}