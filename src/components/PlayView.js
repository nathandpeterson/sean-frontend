import React, { Component } from 'react'
import Player from './Player'
import Comments from './Comments'
import { graphql } from 'react-apollo'
import FetchSong from '../queries/FetchSong'

class PlayView extends Component {
    
    render(){
        console.log('PLAYVIEW', this.props)
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
                    <div className="col-2"></div>
                    <div className="col-10">
                        <div className="player-image-container">
                            <div className="player-image">
                            </div>
                        </div>
                    </div>
                </div>
                        <Player song={this.props.data.song}/>
                        <Comments />
                <div className="row">
                <div className="col-1"> 
                    <i className="fas fa-comments"></i>
                </div>
                </div>
        </div>
    }
}


export default graphql(FetchSong, {
    options: (props) => { return { variables: {id: props.match.params.songId } } }
})(PlayView)