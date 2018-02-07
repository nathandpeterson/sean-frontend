import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import FetchAlbums from '../queries/FetchAlbums'
import '../styles/HomePageStyle.css'


class HomePage extends Component {

    render() {
        if(!this.props.data.albums) return <div> Loading </div>
        const { albums } = this.props.data
        return <div className="container-fluid">
           <div className="row">
                <div className="col center">
                    <div className="main">
                    {albums.map( album => {
                        const { id, imageURL, name, description } = album
                            return  <div key={id}>
                            <div className="card">
                            <img className="card-img-top" src={imageURL} alt="Album cover"/>
                            <div className="card-body">
                                <h4 className="card-title">{name}</h4>
                                <p className="card-text">{description}</p>
                                <Link className="center" to={`/albums/${id}`}>
                                    <button className="btn btn-secondary">listen</button>
                                </Link>
                                </div>
                            </div>
                        </div>
        })}     
                    </div>
                </div>
            </div>
        </div>
    }
  }

  export default graphql (FetchAlbums)(HomePage)