import { Op } from "sequelize";
import { CreateUser } from "@interfaces/user";
import { findAll, findOne, count, create, destroy } from "@libs/modelStatic";
import { Token } from "../../../models/token";
import { User } from "../../../models/user";
import { manageError } from "@libs/sequelize";
import {
  UserBadRequestError,
  UserNotFoundError,
  UsersNotFoundError,
  UserTokenBadRequestError,
  UserTokenNotFoundError
} from "../errors";

/**
 *
 * @param userId
 * @returns user object
 */
export const getOneUser = async (userId: string) => {
  const user = await findOne<User>("User", {
    where: {
      id: userId
    }
  });

  if (!user) throw new UserNotFoundError();

  return user;
};

export const getOneUserWithEmail = async (email: string) => {
  const user = await findOne<User>("User", {
    where: {
      email: email
    }
  });

  if (!user) throw new UserNotFoundError();

  return user;
};

export const getAllUsers = async () => {
  const users = await findAll<User>("User", {
    order: [["email", "ASC"]]
  });

  if (users.length === 0) throw new UsersNotFoundError();

  return users;
};

export const getSomeUsers = async (limit: number) => {
  const users = await findAll<User>("User", {
    order: [["email", "ASC"]],
    limit: limit
  });

  if (users.length === 0) throw new UsersNotFoundError();

  return users;
};

export const getUserWithSomeEmails = async (email: string) => {
  const users = await findAll<User>("User", {
    where: {
      email: {
        [Op.or]: [email, "default@email.com"]
      }
    }
  });

  if (users.length === 0) throw new UsersNotFoundError();

  return users;
};
export const getUserData = async (userId: string) => {
  const users = await findAll<User>("User", {
    where: {
      id: userId
    }
  });

  if (users.length === 0) throw new UserNotFoundError();

  return users;
};

export const getUserRole = async (userId: string) => {
  const user = await findOne<User>("User", {
    where: {
      id: userId
    }
  });

  if (!user) throw new UserNotFoundError();

  return user;
};

export const countUsers = async () => {
  try {
    const users = await count("User");

    return users;
  } catch (err: any) {
    return manageError(err);
  }
};

export const createOneUser = async (data: CreateUser) => {
  const user = await create<User>("User", data);

  if (!user) throw new UserBadRequestError();

  return user;
};

// export const createProfil = async (data: any, userId: string) => {
//   const userCollection = await inCollection("profil");

//   const user = await userCollection.insertOne({
//     ...data,
//     _id: new ObjectId(userId)
//   });
//   return user;
// };

// export const searchForOneUser = async (email: string) => {
//   const userCollection = await inCollection("user");
//   const search = `/${email}/`;
//   const searchedUser = (await userCollection
//     .find({ email: search })
//     .toArray()) as unknown as User[];
//   return searchedUser;
// };

export const storeUserToken = async (token: string, userId: number) => {
  const userToken = await create<Token>("Token", {
    token: token,
    User_Id: userId
  });

  if (!userToken) throw new UserBadRequestError();

  return userToken;
};

// export const getUserToken = async (token: string) => {
//   const userCollection = await inCollection("token");
//   const userToken = (await userCollection.findOne({
//     token: token
//   })) as unknown as UserToken;
//   return userToken;
// };

export const getUserTokenWithId = async (token: string) => {
  const user = await findOne<Token>("Token", {
    where: {
      token: token
    }
  });

  if (!user) throw new UserTokenNotFoundError(token);

  return user;
};

export const deleteUserToken = async (User_Id: number) => {
  const user = await destroy("Token", {
    where: {
      User_Id: User_Id
    }
  });

  if (user === 0) throw new UserTokenBadRequestError(User_Id);

  return user;
};
