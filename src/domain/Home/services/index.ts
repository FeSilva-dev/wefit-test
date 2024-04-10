import { api } from "../../../lib/api"
import { IMovie } from "../../../types"

export const HomeService = {
  getMovies: async () => {
    try{
      const response = await api.get<IMovie[]>('/movies')
      return response.data
    }catch(error){
      throw new Error('Erro ao buscar filmes')
    }
  }
}