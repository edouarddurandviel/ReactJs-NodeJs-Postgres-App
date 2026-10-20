import { Server } from "socket.io";
import { Response } from "express";
import socketIo from "@src/_lib/socketio";

class CompanyAdminSocket {
  private _io: Server;
  constructor() {
    this._io = socketIo.instance();
  }

  public refreshCompany(res: Response, userId: number, params: any) {
    res.on("finish", () => {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        return this._io.emit(`company:${userId}`, params);
      }
    });
  }

  public refreshCompanyAddress(res: Response, number: number, addrId: string, params: any) {
    res.on("finish", () => {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        return this._io.emit(`address:${addrId}`, params);
      }
    });
  }

  public closeConnection() {
    return this._io.close();
  }
}

export default CompanyAdminSocket;
