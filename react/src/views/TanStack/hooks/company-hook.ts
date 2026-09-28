import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { queryOneCompanyFn } from "../queries";

export const queryClient = new QueryClient();

export type Todos = {
  err: boolean;
  data: Array<{
    id: number;
    name: string;
  }>;
};

export const useOneCompanyQueryHook = (id: number | null) => {
  const company = useQuery({
    queryKey: ["company", { id: id }],
    queryFn: ({ queryKey }) => queryOneCompanyFn(queryKey),
    enabled: id !== null,
  });

  const postTodos = async (args: any) => {
    const todos = {
      id: 1,
      status: "me",
      title: `todos - ${args} - ${status}`,
    };
    return [todos];
  };

  const updateMutation = useMutation({
    mutationFn: postTodos,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["company"] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: postTodos,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["company"] });
    },
  });

  return {
    updateCompany: updateMutation.mutate,
    deleteCompany: deleteMutation.mutate,
    isFetchingCompany: company.isFetching,
    company,
  };
};
