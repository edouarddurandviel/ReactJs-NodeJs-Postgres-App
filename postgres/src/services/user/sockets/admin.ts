import { Server } from "socket.io";
import socketIo from "@libs/socketio";

class UserAdminSocket {
  private _io: Server;
  constructor() {
    this._io = socketIo.getInstance();
  }

  public refreshUser(userId: number, params: any) {
    return this._io.emit(`user:${userId}`, params);
  }

  public refreshUserAddress(number: number, addrId: string, params: any) {
    return this._io.emit(`user:${addrId}:address`, params);
  }

  public closeConnection() {
    return this._io.close();
  }
}

export default UserAdminSocket;
