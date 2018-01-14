import React, { Component } from 'react'
import SongInfo from './SongInfo'
import FetchSongs from '../queries/fetchSongs'


class AlbumInfo extends Component {

    render(){
        console.log('AlbumInfo props',this.props)
        return  <div className="back">
       <div className="song-list">
            <ul className="list-group">
                
                <SongInfo albumId={this.props.albumId}/>

            </ul>
        </div>
        </div>
    }
}

export default AlbumInfo