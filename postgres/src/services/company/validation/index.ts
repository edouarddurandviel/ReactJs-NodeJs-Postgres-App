export const validation = (name: string) => {
  switch (name) {
    case "company":
      return {
        collMod: `${name}`,
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["name", "ref", "isoCode"],
            additionalProperties: false,
            properties: {
              name: {
                bsonType: "string",
                description: "[${name}] 'name' is required and is a string"
              },
              ref: {
                bsonType: "number",
                description: "[${name}] 'ref' is required and is a number"
              },
              isoCode: {
                bsonType: "string",
                description: "[${name}] 'isoCode' is required and is a string"
              }
            }
          }
        }
      };
      break;

    default:
      return {};
  }
};
