import React from 'react'

const CoverImage = (album) => {
    if(!album) return <div> </div>
    const {name, artist, imageURL} = album.album
    return  (<div className="container-fluid">
                <div className="row">
                    <div className="col center">
                        <div className="card">
                            <div className="card-content animated fadeIn">
                            <h4 className="card-title">{name}</h4>
                            <h4 className="card-subtitle mb-2 text-muted">{artist}</h4>
                            <div className="album-cover-container center-block">
                                <img className="img-responsive album-cover-image" alt="owls perched at night"src={imageURL}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> )
}

export default CoverImage