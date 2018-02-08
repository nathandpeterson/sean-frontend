import React, { Component } from 'react'
import Player from './Player'
import { withRouter } from 'react-router-dom'

class SongInfo extends Component {
    constructor(props){
        super(props)
        this.state = {player: false}
    }
    clickHandler = (e) => {
        this.props.history.push( `${this.props.location.pathname}/${e.target.id}/play`)
    }

    renderSong = song => {
        const {id, name, length } = song
       return (<div key={id} className="row">                 
                    <div className="col-8">
                        <p>{name}  {length}</p>
                    </div>
                
                    <div className="col-1">
                        <i className="fas fa-download info-icon"></i>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-1">
                        <i id={ id } onClick={this.clickHandler} className="fas fa-play info-icon"></i>
                    </div>            
            </div>)
    }

    render(){
        if(!this.props.songs) return <div> Loading... </div>
        const { songs } = this.props
        return <div> 
        {this.state.player && <Player />}
        {songs.map(song => this.renderSong(song))}
        </div>
    }
}

export default withRouter(SongInfo)