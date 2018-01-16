import React, { Component } from 'react'
import SongInfo from './SongInfo'
import FetchSongs from '../queries/fetchSongs'
import { graphql } from 'react-apollo'
import { Route } from 'react-router-dom'

class AlbumInfo extends Component {

    render(){
        console.log('ALBUMINFO', this.props)
        return  (<div>
                    <div className="row">        
                        <div className="col-1">
                     <i onClick={this.props.history.goBack} className="fas fa-arrow-left"></i>
                    </div>
                <div className="col-11">
                </div>
                </div> 

            <div className="song-list">
            <br />
                <ul className="list-group">
                    <Route path={this.props.match.path} component={ SongInfo } />
                </ul>
            </div>
        </div>)
    }
}

export default AlbumInfo