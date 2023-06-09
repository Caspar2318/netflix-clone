import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const useFavorite = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/favorites", fetcher);

  return { data, error, isLoading, mutate };
};

export default useFavorite;
