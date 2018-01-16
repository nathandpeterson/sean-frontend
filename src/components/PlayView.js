import React, { Component } from 'react'
import Player from './Player'
import Comments from './Comments'
import { graphql } from 'react-apollo'
import FetchSong from '../queries/FetchSong'

class PlayView extends Component {
    constructor(props){
        super(props)
        this.state = {playing: false, toggleClick: ''}
    }

    handleClick = () => {
        this.state.playing ? this.setState({playing: false, toggleClick: ' '}) 
        : this.setState({playing: true, toggleClick: ' '})
    }

    renderPlayIcon() {
        return this.state.playing ? "fas fa-pause play-control" : "fas fa-play play-control"
    }
    
    render(){
        if(!this.props.data) return <div> Loading </div>
        return <div className="container-fluid"> 
            <div className="row">        
                <div className="col-1">
                    <i onClick={this.props.history.goBack} className="fas fa-arrow-left"></i>
                </div>
                    <div className="col-10">
                    </div>
                </div> 
                <div className="row">
                    <div className="col">
                        <div onClick={this.handleClick} className="player-image-container">
                            <i className={this.renderPlayIcon()}></i>
                        </div>
                    </div>
                </div>

                <Player song={this.props.data.song} togglePlaying={this.state.toggleClick}/>
                        
                <div className="row footer">
                    <i className="fas info-icon fa-comments"></i>
                    <span className="badge badge-secondary">5</span>
                </div>
                <Comments />
        </div>
    }
}


export default graphql(FetchSong, {
    options: (props) => { return { variables: {id: props.match.params.songId } } }
})(PlayView)