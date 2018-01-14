import React, { Component } from 'react'
import FetchSongs from '../queries/fetchSongs'
import { graphql } from 'react-apollo'

class SongInfo extends Component {
    renderSong = (song) => {
        const {name, length, imageURL} = song
       return (<div className="row song-display">                 
                    <div className="col-5">
                        <p>{name}  {length}</p>
                    </div>
                    <div className="col-3">
                        <i className="fas fa-play"></i>
                    </div>
                    <div className="col-4">
                        <i className="fas fa-download"></i>
                    </div>                  
            </div>)
    }

    render(){
        console.log('SONGINFO', this.props)
        if(!this.props.data.album) return <div> Loading... </div>
        
        return <div>
       { this.props.data.album.songs.map(song => {
            return this.renderSong(song)
        })}
        </div>
    }
}

export default graphql(FetchSongs, {
    options: (props) => { return { variables: {id: props.albumId } } }
})(SongInfo)