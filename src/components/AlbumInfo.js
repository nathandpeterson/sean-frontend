import React, { Component } from 'react'
import SongInfo from './SongInfo'
import { graphql, withApollo } from 'react-apollo'
import fetchSongs from '../queries/fetchSongs'

class AlbumInfo extends Component {

    render(){
        if(!this.props.data.album) return <div> broken </div>
        const { songs } = this.props.data.album
        return  (<div className="center">
            <div className="album-info card animated fadeIn">
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
                   <SongInfo songs={ songs } />
                </ul>
            </div>
        </div>
        </div>)
    }
}

export default graphql(fetchSongs, {
    options: (props) => { return { variables: {id: props.match.params.id } } }
})(withApollo(AlbumInfo))