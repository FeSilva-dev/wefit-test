import { api } from "../../../lib/api"

interface IMovie {
  id: number
  title: string
  price: number
  image: string
}

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