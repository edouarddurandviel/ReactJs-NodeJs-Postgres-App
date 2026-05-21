import { Op } from "sequelize";
import { CreateUser } from "../../../_interfaces/user";
import { findAll, findOne, count, create, destroy } from "@libs/queries";
import { Token } from "../../../models/token";
import { User } from "../../../models/user";
import { dbErrors } from "@libs/sequelize";

export const getOneUser = async (userId: string) => {
  try {
    const user = await findOne<User>("User", {
      where: {
        id: userId
      }
    });
    return user;
  } catch (err) {
    return dbErrors(err);
  }
};

export const getOneUserWithEmail = async (email: string) => {
  try {
    const user = await findOne<User>("User", {
      where: {
        email: email
      }
    });
    return user;
  } catch (err: any) {
    return dbErrors(err);
  }
};

export const getAllUsers = async () => {
  try {
    const users = await findAll<User>("User", {
      order: ["email", "ASC"]
    });

    return users;
  } catch (err: any) {
    return dbErrors(err);
  }
};

export const getSomeUsers = async (limit: number) => {
  try {
    const users = await findAll<User>("User", {
      order: ["email", "ASC"],
      limit: limit
    });

    return users;
  } catch (err: any) {
    return dbErrors(err);
  }
};

export const getUserWithSomeEmails = async (email: string) => {
  try {
    const users = await findAll<User>("User", {
      where: {
        email: {
          [Op.or]: [email, "default@email.com"]
        }
      }
    });

    return users;
  } catch (err: any) {
    return dbErrors(err);
  }
};
export const getUserData = async (userId: string) => {
  try {
    const users = await findAll<User>("User", {
      where: {
        id: userId
      }
    });

    return users;
  } catch (err: any) {
    return dbErrors(err);
  }
};

export const getUserRole = async (userId: string) => {
  try {
    const user = await findOne<User>("User", {
      where: {
        id: userId
      }
    });
    return user;
  } catch (err: any) {
    return dbErrors(err);
  }
};

export const countUsers = async () => {
  try {
    const users = await count("User");

    return users;
  } catch (err: any) {
    return dbErrors(err);
  }
};

export const createOneUser = async (data: CreateUser) => {
  try {
    const user = await create<User>("User", data);
    return user;
  } catch (err: any) {
    return dbErrors(err);
  }
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

/**
 *
 * @param token
 * @param userId
 * @returns user object
 */
export const storeUserToken = async (token: string, userId: number) => {
  try {
    const userToken = await create<Token>("Token", {
      token: token,
      User_Id: userId
    });
    return userToken;
  } catch (err: any) {
    return dbErrors(err);
  }
};

// export const getUserToken = async (token: string) => {
//   const userCollection = await inCollection("token");
//   const userToken = (await userCollection.findOne({
//     token: token
//   })) as unknown as UserToken;
//   return userToken;
// };

export const getUserTokenWithId = async (User_Id: number) => {
  try {
    const user = await findOne<Token>("Token", {
      where: {
        User_Id: User_Id
      }
    });

    return user;
  } catch (err: any) {
    return dbErrors(err);
  }
};

export const deleteUserToken = async (User_Id: string) => {
  try {
    const user = await destroy("Token", {
      where: {
        User_Id: User_Id
      }
    });
    return user;
  } catch (err: any) {
    return dbErrors(err);
  }
};
