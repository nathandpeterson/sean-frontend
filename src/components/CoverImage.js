import React from 'react'

const CoverImage = (album) => {
    if(!album) return <div> Loading... </div>
    const {name, artist} = album.album
    return  (<div>
        <h4 className="card-title">{name}</h4>
        <h4 className="card-subtitle mb-2 text-muted">{artist}</h4>
        <div className="album-cover-container center-block">
            <img className="img-responsive album-cover-image"src="https://images.unsplash.com/photo-1496239298983-ebf973a467dc?auto=format&fit=crop&w=1050&q=80"/>
        </div>
    </div> )
}

export default CoverImage