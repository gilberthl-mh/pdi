declare module "pdi" {

  export interface Pdi {
    add: typeof add
    start: typeof start
    create: typeof create
    strict: typeof strict
    clear: typeof clear
  }

  export const pdi: Pdi

  type Value = string | number | object
  type Factory = (dependencies: object) => Value

  function add(name: string, dependencies: string[], factoryOrValue: Factory | Value): void
  function add(name: string, factoryOrValue: Factory | Value): void
  function add(dependencies: string[], factoryOrValue: Factory | Value): void

  function start<T>(): Promise<T>
  function start<T>(dependencies: string[]): Promise<T>

  function clear(): void

  function create(): Pdi
  function strict(): Pdi
}
