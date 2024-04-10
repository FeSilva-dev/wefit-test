import { useQuery } from "@tanstack/react-query";
import { HomeService } from "../services";

export function useHome(){
  const { data, isLoading } = useQuery({
    queryKey: ['MOVIES_LIST'],
    queryFn: async () => HomeService.getMovies(),
  })

  console.log('data', data)

  return {
    data,
    isLoading
  }
}