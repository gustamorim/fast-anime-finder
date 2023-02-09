import React from 'react'

function AnimeCard({anime}) {
    return (
        <div className="anime-content">
             <a href={anime.url} target="_blank" rel="noreferrer">
            <div className="image-content">
            <img src={anime.images.jpg.image_url} alt="" />
            </div>
            <h3>{anime.title}</h3>
            </a>
        </div>
    )
}

export default AnimeCard