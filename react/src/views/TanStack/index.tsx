import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./hooks/company-hook";
import TanStack from "./tanstack";

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TanStack />
    </QueryClientProvider>
  );
};

export default Index;
