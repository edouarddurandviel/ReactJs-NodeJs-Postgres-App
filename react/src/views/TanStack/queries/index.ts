export const queryAllCompaniesFn = async (queryKey: any) => {
  const [_key] = queryKey;

  const companies = await fetch("http://localhost:3000/api/v1/company/all", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
  });

  const result = await companies.json();

  return result.data;
};

export const queryOneCompanyFn = async (queryKey: any) => {
  const [_key, { id }] = queryKey;

  const company = await fetch(`http://localhost:3000/api/v1/company/one/${id}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
  });

  const result = await company.json();

  return result.data;
};
