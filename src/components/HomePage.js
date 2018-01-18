import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import FetchAlbums from '../queries/FetchAlbums'


class HomePage extends Component {

    render() {
        if(!this.props.data.albums) return <div> Loading </div>
        const { albums } = this.props.data
        return <div className="container">

        {albums.map( album => {
             return  <div className="album-card" 
                            key={album.id}>
             <div className="card" style={{width:'100%'}}>
             <img className="card-img-top" src={album.imageURL} alt="Album cover"/>
             <div className="card-block">
                <h4 className="card-title">{album.name}</h4>
                <p className="card-text">{album.description}</p>
                <Link to={`/albums/${album.id}`}>
                    <button className="btn btn-secondary">listen</button>
                </Link>
            </div>
            </div>
            </div>
        })}     
        </div>
    }
  }

  export default graphql (FetchAlbums)(HomePage)