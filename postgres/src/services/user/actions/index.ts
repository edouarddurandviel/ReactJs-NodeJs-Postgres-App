import { Op } from "sequelize";
import { CreateUser } from "../../../_interfaces/user";
import { findAll, findOne, count, create, destroy } from "@libs/queries";
import { Token } from "../../../models/token";
import { User } from "../../../models/user";
import { dbErrors } from "@libs/sequelize";
import user from "src/_routes/user";

export const getOneUser = async (userId: string) => {
  try {
    const user = await findOne<User>("User", {
      where: {
        id: userId
      }
    });

    if (!user) throw new Error("No user found");

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

    if (!user) throw new Error("No user found");

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

    if (users.length === 0) throw new Error("No users found");

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

    if (users.length === 0) throw new Error("No users found");

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

    if (users.length === 0) throw new Error("No user found");

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

    if (users.length === 0) throw new Error("No users found");

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

    if (!user) throw new Error("No user role found");

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

    if (!user) throw new Error("Failed to create user");

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

    if (!userToken) throw new Error("No user token found");

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

export const getUserTokenWithId = async (token: string) => {
  try {
    const user = await findOne<Token>("Token", {
      where: {
        token: token
      }
    });

    if (!user) throw new Error(`No token found with this token: ${token}`);

    return user;
  } catch (err: any) {
    return dbErrors(err);
  }
};

export const deleteUserToken = async (User_Id: number) => {
  try {
    const user = await destroy("Token", {
      where: {
        User_Id: User_Id
      }
    });

    if (user === 0) throw new Error(`Failed to delete token for this user: ${User_Id}`);

    return user;
  } catch (err: any) {
    return dbErrors(err);
  }
};
