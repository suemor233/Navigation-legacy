
import { SocketClient } from './socket-client'

const client = new SocketClient()
client.initIO()
const ws = client.socket

export default ws
