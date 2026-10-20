import { Server } from "socket.io";
import { Response } from "express";
import socketIo from "@src/_lib/socketio";
import { noServerError } from "@src/_lib/server";

class UserAdminSocket {
  private _io: Server;
  constructor() {
    this._io = socketIo.instance();
  }

  public refreshUser(res: Response, userId: number, params: any) {
    if (noServerError(res.statusCode)) {
      return this._io.emit(`user:${userId}`, params);
    }
  }

  public refreshUserAddress(res: Response, number: number, addrId: string, params: any) {
    if (noServerError(res.statusCode)) {
      return this._io.emit(`user:${addrId}:address`, params);
    }
  }

  public closeConnection() {
    return this._io.close();
  }
}

export default UserAdminSocket;
