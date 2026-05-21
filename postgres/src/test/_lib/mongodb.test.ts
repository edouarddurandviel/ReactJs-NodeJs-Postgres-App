import { MongoClient } from "mongodb";
import { expect, jest, test } from "@jest/globals";
import { Server } from "socket.io";
import { connectToDatabase } from "@libs/mongodb";

describe("[lib] mongodb ", () => {
  beforeAll(async () => {});
  afterAll(async () => {});

  it("connectToDatabase", async () => {
    const result = await connectToDatabase();
    let spy = jest.spyOn(companyServices, "getCompanies");
    expect(spy).toEqual(true);
  });
});
