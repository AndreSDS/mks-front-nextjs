import { useQuery } from "@/lib/query";
import { getProducts } from "@/services/actions";

export function useProducts() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => await getProducts(),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return { products, isLoading, error };
}
