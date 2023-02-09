import React, { useState } from 'react'
import { useSearch } from './useSearch';
import AnimeCard from './AnimeCard'

function Search() {

  const [query, setQuery] = useState("");
  const { searchAnime, searchStatus } = useSearch(query);
  

  const handleSearch = (e) => {
      setQuery(e.target.value);


  var isSearching = searchStatus === 'loading'
  var isError = searchStatus === 'error'

  
  if (isSearching) return <div>Loading...</div>
  if (isError) return <div>Error </div>
    
  }


  return ( 
    <div className="search-content">
        <div className="main-search">
            <input type="text" placeholder='Search your anime' onChange={handleSearch} />
          </div>
        <div className="box-anime">
            {query && searchAnime && searchAnime.data && searchAnime.data.map(anime => (
            <AnimeCard 
            anime={anime}
            key={anime.mal_id}/>
            ))} 
        </div>
      </div>
  )
}

export default Search