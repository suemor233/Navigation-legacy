import { Socket } from "socket.io-client"
import webSocket from 'socket.io-client'
export class SocketClient {
  public socket!: Socket

  constructor() {
    this.socket = webSocket('http://127.0.0.1:2347')
  }
}
