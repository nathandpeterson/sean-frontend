import React, { Component } from 'react'
import SongInfo from './SongInfo'
import FetchSongs from '../queries/fetchSongs'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'

class AlbumInfo extends Component {

    render(){
        console.log(this.props)
        return  (<div><div className="row">        
            <div className="col-1">
                <i onClick={this.props.history.goBack} className="fas fa-arrow-left"></i>
             </div>
             <div className="col-11"></div>
        </div> 
       <div className="song-list">
        <br />
            <ul className="list-group">
                <SongInfo albumId={1}/>
            </ul>
            </div>
            </div>)
    }
}

export default AlbumInfo