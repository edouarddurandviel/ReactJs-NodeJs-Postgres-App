import { Unauthorized } from "http-json-errors";
import { CreateUser } from "@src/_interfaces/user";
import * as userActions from "@src/services/user/actions";
import * as userSockets from "@src/services/user/sockets/clients";
import { argon2Sync, randomBytes } from "node:crypto";
import * as jwt from "jsonwebtoken";
import { Rights } from "@src/models/rights";

class UserController {
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
    const user: any = await userActions.getOneUserWithEmail(email);
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
      const expire = Date.now();
      const Session_Id = expire.toString();
      const payload = { Session_Id: Session_Id };
      const secret = process.env.ENV_SECRET;

      const token = secret && jwt.sign(payload, secret, { expiresIn: expire + maxAge });

      token && (await userActions.storeUserToken(Session_Id, user.id));

      const loggedUser = {
        id: user.id,
        email: user.email,
        perms: user.user_rights as unknown as Rights
      };

      return { loggedUser, token };
    } else {
      throw new Unauthorized("Invalid email or password");
    }
  }

  public async logout(userId: number) {
    await userActions.deleteUserToken(userId);
  }
}

export default UserController;
