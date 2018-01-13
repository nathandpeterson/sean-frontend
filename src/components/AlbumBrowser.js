import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import query from '../queries/fetchAlbums'

class AlbumBrowser extends Component {

    render() {
        return <div className="card">
        Songs
        </div>
    }
}

export default graphql(query)(AlbumBrowser)