import {useQuery} from "react-query"
import axios from 'axios';


  export const useGetFetch  = () => {
  const { data: anime , status: statusAnime, setStale } = useQuery(["topanime"], () => { 
    return axios.get("https://api.jikan.moe/v4/top/anime").then((response) => response.data);
  })
  return {statusAnime, anime, setStale}
}
