import * as Yup from "yup";

export const UserValidation = Yup.object().shape({
  firstname: Yup.string().max(50).required("First Name is required"),
  lastname: Yup.string().max(50).required("Last Name is required"),
  email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .test("Password cannot start or end with spaces", (value) => value === value.trim())
    .max(10, "Password must be less than 10 characters"),
});

export const schemaRHF = Yup.object({
  firstName: Yup.string().required(),
  iceCreamType: Yup.object({
    label: Yup.string().required(),
    value: Yup.string().required(),
  }),
}).required();

export const schemaUser = Yup.object({
  firstName: Yup.string().required("Firstname is required"),
  email: Yup.string().email("Value must be an email").required("Email is required"),
}).required();

export const schemaCreateCompany = Yup.object({
  id: Yup.string().nullable(),
  name: Yup.string().required("Name is required"),
  activity: Yup.string().required("Activity is required"),
  owner: Yup.string().required("Owner name is required"),
}).required();

export const schemaCreateAddress = Yup.object({
  street: Yup.string().required("Street is required"),
  postcode: Yup.string().required("Postcode is required"),
  city: Yup.string().required("City is required"),
}).required();

export const schemaUserCreate = Yup.object({
  password: Yup.string().required("Password is required"),
  email: Yup.string().email("Value must be an email").required("Email is required"),
}).required();

export const formizUser = Yup.object({
  firstName: Yup.string().required("Firstname is required"),
  lastName: Yup.string().required("Last name is required"),
  address: Yup.string().required("Addresse is required"),
  postCode: Yup.number().max(5).required("Postcode is required"),
  city: Yup.string().required("City is required"),
  phone: Yup.number().required("Phone is required"),
}).required();
