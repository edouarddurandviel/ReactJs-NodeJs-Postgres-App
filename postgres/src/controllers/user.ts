import { Unauthorized } from "http-json-errors";
import { CreateUser } from "../_interfaces/user";
import * as userActions from "../services/user/actions";
import { argon2Sync, randomBytes } from "node:crypto";
import * as jwt from "jsonwebtoken";
import { User, UserToken } from "../_interfaces/models";

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
    const user = await userActions.createOneUser(dataHash);

    return user;
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

  public async login(email: string, password: string) {
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
      const payload = { User_Id: user.id };
      const secret = process.env.ENV_SECRET;

      const token = secret && jwt.sign(payload, secret, { expiresIn: "1w" });
      token && (await userActions.storeUserToken(token, user.id));

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
