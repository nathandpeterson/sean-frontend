import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import fetchAlbum from '../queries/fetchAlbum'
import CoverImage from './CoverImage'

class AlbumBrowser extends Component {

    revealAlbumInfo = () => {
        this.props.history.push(this.props.location.pathname + '/songs')
    }

    render() {

        const { album } = this.props.data
        if(!album) {return <div> Loading... </div>}
        
        return (    <div>
                        <div onClick={this.revealAlbumInfo}>
                            <CoverImage  album={ album }/>
                        </div>
                     </div>)     
    }

}

export default graphql(fetchAlbum, {
    options: (props) => { return { variables: {id:  props.match.params.id } } }
})(AlbumBrowser)





