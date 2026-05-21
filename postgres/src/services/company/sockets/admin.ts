import { Server } from "socket.io";
import socketIo from "@libs/socketio";

class CompanyAdminSocket {
  private _io: Server;
  constructor() {
    this._io = socketIo.getInstance();
  }

  public refreshCompany(userId: number, params: any) {
    return this._io.emit(`company:${userId}`, params);
  }

  public refreshCompanyAddress(number: number, addrId: string, params: any) {
    return this._io.emit(`address:${addrId}`, params);
  }

  public closeConnection() {
    return this._io.close();
  }
}

export default CompanyAdminSocket;
