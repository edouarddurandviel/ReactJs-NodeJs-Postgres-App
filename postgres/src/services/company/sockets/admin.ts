import { Server } from "socket.io";
import { Response } from "express";
import socketIo from "@src/_lib/socketio";
import { noServerError } from "@src/_lib/server";

class CompanyAdminSocket {
  private _io: Server;
  constructor() {
    this._io = socketIo.instance();
  }

  public refreshCompany(res: Response, userId: number, params: any) {
    res.on("finish", () => {
      if (noServerError(res.statusCode)) {
        return this._io.emit(`company:${userId}`, params);
      }
    });
  }

  public refreshCompanyAddress(res: Response, number: number, addrId: string, params: any) {
    res.on("finish", () => {
      if (noServerError(res.statusCode)) {
        return this._io.emit(`address:${addrId}`, params);
      }
    });
  }

  public closeConnection() {
    return this._io.close();
  }
}

export default CompanyAdminSocket;
