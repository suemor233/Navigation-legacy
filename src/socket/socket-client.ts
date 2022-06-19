import { EventTypes } from '@/types/events'
import { eventBus } from '@/utils/event-emitter'
import type { Socket } from 'socket.io-client'
import { io } from 'socket.io-client'

export class SocketClient {
  public socket!: Socket

  constructor() {
    this.socket = io(`http://127.0.0.1:2347`, {
      timeout: 10000,
      reconnectionDelay: 3000,
      autoConnect: false,
      reconnectionAttempts: 3,
      transports: ['websocket'],
    })
  }
  initIO() {
    if (!this.socket) {
      return
    }
    this.socket.close()
    this.socket.open()

  }
  reconnect() {
    this.socket.open()
  }
  handleEvent(type: EventTypes, data: any) {
    eventBus.emit(type, data)
    // eventHandler(type, data)
  }
  emit(event: EventTypes, payload: any) {
    return new Promise((resolve) => {
      if (this.socket && this.socket.connected) {
        this.socket.emit(event, payload, (payload: any) => {
          resolve(payload)
        })
      }
    })
  }
}
