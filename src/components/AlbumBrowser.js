import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import fetchAlbum from '../queries/fetchAlbum'
import AlbumInfo from './AlbumInfo'
import CoverImage from './CoverImage'

class AlbumBrowser extends Component {
    constructor(props){
        super(props)
        this.state = { clicked: false }
    }

    clickHandler = () => {
        this.setState({ clicked: true })
    }

    render() {
        const { album } = this.props.data
        if(!album) {return <div> Loading... </div>}
       return (<div className="card-container">
                <div className="card"  onClick={this.clickHandler}>
                   <CoverImage album={ album }/>
                </div>     
            </div>)
                        
    }
}

export default graphql(fetchAlbum, {
    options: (props) => { return { variables: {id:  props.match.params.id } } }
})(AlbumBrowser)