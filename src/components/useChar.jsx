import {useQuery} from "react-query"
import axios from 'axios';


  export const useGetChar  = () => {
    const { data : character , status: statusChar} = useQuery(["topchar"], () => {
        return axios.get("https://api.jikan.moe/v4/top/characters").then((response) => response.data)
      }, { refetchInterval: 60000 })
  return {statusChar, character}

}
