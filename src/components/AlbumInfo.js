import React, { Component } from 'react'
import SongInfo from './SongInfo'
import { Route } from 'react-router-dom'

class AlbumInfo extends Component {

    render(){

        return  (<div className="animated fadeIn">
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