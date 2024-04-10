import { useQuery } from "@tanstack/react-query";
import { HomeService } from "../services";
import { useMemo } from "react";
import { useParams } from "../../../hooks/useParams";
import { standardizeText } from "../../../utils";

export function useHome(){
  const { params } = useParams()
  const { data, isLoading } = useQuery({
    queryKey: ['MOVIES_LIST'],
    queryFn: async () => HomeService.getMovies(),
  })

  const searchText = params.get('search-query')

  const filteredMovies = useMemo(() => {
    if(!searchText) {
      return data
    }
    

    return data?.filter(item => 
      standardizeText(item.title).includes(standardizeText(searchText))
    )
  }, [data, searchText])

  return {
    data: filteredMovies,
    isLoading
  }
}