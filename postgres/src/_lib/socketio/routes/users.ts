import { Server, Socket } from "socket.io"

// Standalone endpoint: handles any messages type
export default (io: Server, socket: Socket) => {
    
    socket.on("user:receive:notification", (msg: any) => {
        // task
    })

    socket.on("user:send:notification", (msg: any) => {
        // task
    })

    socket.on("user:receive:alert", (msg: any) => {
        // task
    })

    socket.on("user:send:alert", (msg: any) => {
        // task
    })

}