import React, { Component } from 'react'
import SongInfo from './SongInfo'
import FetchSongs from '../queries/fetchSongs'
import { graphql } from 'react-apollo'

class AlbumInfo extends Component {

    render(){
        console.log('AlbumInfo props',this.props)
        return  <div className="back">
       <div className="song-list">
            <ul className="list-group">
                <li className="list-group-item">song 1</li>
                <li className="list-group-item">song 2</li>
                <li className="list-group-item">song 3</li>
                
                {this.props.data &&
                <SongInfo albumId={this.props.albumId}/>}

            </ul>
        </div>
        </div>
    }
}

export default graphql(FetchSongs, {
    options: (props) => { return { variables: {id: props.albumId } } }
})(AlbumInfo)