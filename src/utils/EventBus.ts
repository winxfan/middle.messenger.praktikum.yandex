export type FunctionType = (...args: any) => any

export type ListenersType = {
  [key: string]: FunctionType[]
}

export class EventBus {
  private listeners: ListenersType = {}

  on(event: string, callback: FunctionType) {
    if(!this.listeners[event]) {
      this.listeners[event] = []
    }

    this.listeners[event]?.push(callback)
  }

  off(event: string, callback: FunctionType) {
    if(!this.listeners[event]) {
      throw new Error(`Нет события ${event}`)
    }

    this.listeners[event] = this.listeners[event].filter((item) => (
      item !== callback
    ))
  }

  emit(event: string, ...args: any) {
    if(!this.listeners[event]) {
      throw new Error(`Нет события ${event}`)
    }

    this.listeners[event].forEach((item) => {
      item(...args)
    })
  }
}
