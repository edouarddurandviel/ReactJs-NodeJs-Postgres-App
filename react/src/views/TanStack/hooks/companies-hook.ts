import { QueryClient, useQuery } from "@tanstack/react-query";
import { queryAllCompaniesFn } from "../queries";

export const queryClient = new QueryClient();

export type Todos = {
  err: boolean;
  data: Array<{
    id: number;
    name: string;
  }>;
};

export const useCompaniesQueryHook = () => {
  const companies = useQuery({
    queryKey: ["companies", { page: 1 }],
    queryFn: ({ queryKey }) => queryAllCompaniesFn(queryKey),
  });

  return {
    isFetchingCompanies: companies.isFetching,
    companies,
  };
};
