import { Unauthorized } from "http-json-errors";
import { CreateUser } from "@interfaces/user";
import * as userActions from "@services/user/actions";
import { argon2Sync, randomBytes } from "node:crypto";
import * as jwt from "jsonwebtoken";
import * as userSockets from "@services/user/sockets/clients";
import { User, UserToken } from "@interfaces/models";

class UserController {
  private _io;

  constructor(io: any) {
    this._io = io;
  }

  public async getAllUsers() {
    const user = await userActions.getAllUsers();
    return user;
  }

  public async createOneUser(data: CreateUser) {
    const salt = randomBytes(16);
    const secret = process.env.ENV_SECRET;

    // auth à la 3ème bloque le compte 5 10 20 30 minutes
    // ip de la machine avec le compte + MFA
    // nouveau de pass toutes les 6/12 mois pour les données sensibles ?
    // auth fails => _until timestamp as connection fails (filed_attemps/lock_until)
    // then update if auth has succeeded.
    // lock_until = Date.now() + 5 * 60 * 1000; ou directement dans sql NOW()+ INTERVAL '5 minutes'
    // redis if several node servers and force brut

    const derivedKey = argon2Sync("argon2id", {
      message: data.password,
      nonce: salt,
      parallelism: 4,
      tagLength: 32,
      memory: 65536,
      passes: 3,
      secret: secret
    }).toString("hex");

    const dataHash = {
      email: data.email,
      password: derivedKey,
      salt: salt.toString("hex")
    };
    userActions.createOneUser(dataHash);

    userSockets.reloadUsers();
  }

  // public async createProfil(data: any, userId: string) {
  //   const user = await userActions.createProfil(data, userId);
  //   return user;
  // }

  public async getUserData(userId: string) {
    const user = await userActions.getUserData(userId);
    return user;
  }

  public async getOneUserWithEmail(email: string) {
    const user = await userActions.getOneUserWithEmail(email);
    return user;
  }

  public async login(email: string, password: string, maxAge: any) {
    const user = (await userActions.getOneUserWithEmail(email)) as unknown as User;
    const salt = Buffer.from(user.salt, "hex");

    const hash = argon2Sync("argon2id", {
      message: password,
      nonce: salt,
      parallelism: 4,
      tagLength: 32,
      memory: 65536,
      secret: process.env.ENV_SECRET,
      passes: 3
    });

    if (hash.toString("hex") === user.password) {
      // create jwt token
      const Session_Id = Date.now().toString();
      const payload = { Session_Id: Session_Id }; // session id
      const secret = process.env.ENV_SECRET;

      const token = secret && jwt.sign(payload, secret, { expiresIn: maxAge });

      token && (await userActions.storeUserToken(Session_Id, user.id));

      const userPermissions = {
        id: user.id,
        email: user.email
      };

      return { userPermissions, token };
    } else {
      throw new Unauthorized("Invalid email or password");
    }
  }

  public async logout(userId: number) {
    const result = await userActions.deleteUserToken(userId);
    return result;
  }
}

export default UserController;
