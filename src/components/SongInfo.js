import React, { Component } from 'react'
import FetchSongs from '../queries/fetchSongs'
import { graphql } from 'react-apollo'
import Player from './Player'

class SongInfo extends Component {
    constructor(props){
        super(props)
        this.state = {player: false}
    }
    clickHandler = (e) => {
        console.log('clicked it', e.target, this.props)
       //this.props.location.pathname + '/' + e.target.id + '/play'
        this.props.history.push( `${this.props.location.pathname}/${e.target.id}/play`)
        // this.setState({player: true})
    }

    renderSong = (song) => {
        const {id, name, length, imageURL} = song
       return (<div key={id} className="row song-display">                 
                    <div className="col-7">
                        <p>{name}  {length}</p>
                    </div>
                    <div className="col-2">
                        <i id={ id } onClick={this.clickHandler} className="fas fa-play"></i>
                    </div>
                    <div className="col-1">
                        <i className="fas fa-download"></i>
                    </div>                  
            </div>)
    }

    render(){
        console.log('SONGINFO PROPS',this.props)
        if(!this.props.data.album) return <div> Loading... </div>
    
        return <div>
        {this.state.player && <Player />}
       { this.props.data.album.songs.map(song => {
            return this.renderSong(song)
        })}
        </div>
    }
}

export default graphql(FetchSongs, {
    options: (props) => { return { variables: {id: props.match.params.id } } }
})(SongInfo)