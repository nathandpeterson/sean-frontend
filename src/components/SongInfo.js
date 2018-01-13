import React, { Component } from 'react'
import FetchSongs from '../queries/fetchSongs'
import { graphql } from 'react-apollo'

class SongInfo extends Component {

    render(){
    
       return  <div className="row song-display">                 
                    <div className="col-5">
                        <p>hands</p> 
                    </div>
                    <div className="col-3">
                        <i className="fas fa-play"></i>
                    </div>
                    <div className="col-4">
                        <i className="fas fa-download"></i>
                    </div>                  
        </div>
    }
}

export default graphql(FetchSongs, {
    options: (props) => { return { variables: {id: props.albumId } } }
})(SongInfo)