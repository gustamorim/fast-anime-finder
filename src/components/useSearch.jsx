import { useQuery } from "react-query";
import axios from 'axios';


export const useSearch = (query) => {
    const {data: searchAnime, status: searchStatus} = useQuery (["search", query], () => {
        return axios.get(`https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&limit=12`).then((response) => response.data);
    }, { refetchInterval: 60000 })
    
    return {searchAnime, searchStatus}
}

export default useSearch;