import React, { Component } from 'react'
import Player from './Player'
import Comments from './Comments'
import { graphql } from 'react-apollo'
import FetchSong from '../queries/FetchSong'

class PlayView extends Component {
    constructor(props){
        super(props)
        this.state =   { playing: false, 
                        toggleClick: '',
                        commentView: false,
                        backgroundImage: `https://images.unsplash.com/photo-1484151709479-3996843263cf?auto=format&fit=crop&w=750&q=80`}
    }

    handleClick = () => {
        // state.toggleClick just triggers to tell the player to toggle in the componentWillReceiveProps
        let currentState = Object.assign({}, this.state)
        this.state.playing ? this.setState({...currentState, playing: false, toggleClick: ' '}) 
        : this.setState({...currentState, playing: true, toggleClick: ' '})
    }

    toggleCommentView = () => {
        let currentState = Object.assign({}, this.state)
        this.state.commentView ? this.setState({...currentState, commentView: false}) 
        : this.setState({...currentState, commentView: true})
    }

    renderPlayIcon() {
        return this.state.playing ? "fas fa-pause play-control" : "fas fa-play play-control"
    }

    componentWillReceiveProps({data}) {
        const { song } = data
        this.setState({backgroundImage: song.imageURL})
    }
    
    render(){
        if(!this.props.data.song) return <div> Loading Song</div>
        return <div className="animated fadeIn container-fluid"> 
            <div className="row">        
                <div className="col-1">
                    <i onClick={this.props.history.goBack} className="fas fa-arrow-left"></i>
                </div>
                    <div className="col-10">
                    </div>
                </div> 
                <div className="row">
                    <div className="col">
                        <div onClick={this.handleClick} 
                            className="player-image-container"
                            style={{backgroundImage: `url(${this.state.backgroundImage})`}}>
                            <i className={this.renderPlayIcon()}></i>
                        </div>
                        <h5> {this.props.data.song.name}</h5>
                    </div>
                </div>

                <Player song={this.props.data.song} 
                        playing={this.state.playing}
                        />
                        
                <div className="row footer">
                    <i  onClick={ this.toggleCommentView }className="fas info-icon fa-comments"></i>
                    <span className="badge badge-secondary">
                        {this.props.data.song.comments.length || 0}
                    </span>
                </div>
                {this.state.commentView && 
                <Comments   song_id={this.props.data.song.id} 
                            comments={this.props.data.song.comments} 
                            refetch={this.props.data.refetch}/>}
        </div>
    }
}


export default graphql(FetchSong, {
    options: (props) => { return { variables: {id: props.match.params.songId } } }
})(PlayView)