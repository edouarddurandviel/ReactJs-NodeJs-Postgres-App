export default {
  companies: {
    all: {
      method: "GET",
      path: "company/all",
    },
    one: {
      method: "GET",
      path: "company/one/:companyId",
    },
    create: {
      method: "POST",
      path: "company/create",
    },
    delete: {
      method: "DELETE",
      path: "company/delete/:companyId",
    },
    update: {
      method: "PATCH",
      path: "company/update/:companyId",
    },
    getDocuments: {
      method: "GET",
      path: "company/get/documents",
    },
    addresses: {
      create: {
        method: "POST",
        path: "company/addresses/create/:companyId",
      },
    },
  },
  users: {
    all: {
      method: "GET",
      path: "user/all",
    },
    one: {
      method: "GET",
      path: "user/one/:userId",
    },
    create: {
      method: "POST",
      path: "user/create",
    },
    addProfil: {
      method: "POST",
      path: "user/profil/:userId/create",
    },
    login: {
      method: "GET",
      path: "user/login",
    },
    logout: {
      method: "POST",
      path: "user/logout/:userId",
    },
    delete: {
      method: "DELETE",
      path: "user/delete/:userId",
    },
    update: {
      method: "PATCH",
      path: "user/update/:userId",
    },
    getDocuments: {
      method: "GET",
      path: "user/get/documents",
    },
  },
};
