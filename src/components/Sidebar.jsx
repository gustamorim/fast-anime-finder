import React from 'react'
import { useGetFetch } from './useFetch';

function Sidebar() {


  const {statusAnime, anime} = useGetFetch()
  

  var isLoading = statusAnime === 'loading'
  var isError = statusAnime === 'error'
  
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error </div>

  const titleslice = anime.data.slice(0,5)

  return (
    <div className="mainsidebar">
        <div className="sidebar">
            <h3>Top Animes</h3>
              {titleslice.map((title, i) => <a href={title.url} key = {i} >
                {title.title}
               <div className="top-content">
               <img src={title.images.jpg.image_url} alt="" />
               </div>
               </a> 
               )
               }
        </div>
    </div>
  )
}


export default Sidebar