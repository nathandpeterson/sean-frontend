import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import fetchAlbum from '../queries/fetchAlbum'
import AlbumInfo from './AlbumInfo'

class AlbumBrowser extends Component {
    constructor(props){
        super(props)
        this.state = {front: true, flipperStyle: {width: '100%'}}
    }

    clickHandler = () => {
        this.setState({front: false, 
                    flipperStyle: {transform: 'rotateY(180deg)',
                    transition: '.7s',
                    transformStyle: 'preserve-3d',
                    width: '50%',
                    position: 'relative'}})
    }

    render() {
        const { album } = this.props.data
        if(!album) {return <div> Loading... </div>}
        return <div className=" flip-container">
                <div className="card-container">
                <div className="card"  onClick={this.clickHandler}>
                    <div className="flipper" style={this.state.flipperStyle}>
                        <div className="front">
                            <h4 className="card-title">{album.name}</h4>
                            <h4 className="card-subtitle mb-2 text-muted">{album.artist}</h4>
                                <div className="album-cover-container center-block">
                                    <img className="img-responsive album-cover-image"src="https://images.unsplash.com/photo-1496239298983-ebf973a467dc?auto=format&fit=crop&w=1050&q=80"/>
                                </div>
                        </div>
                            <AlbumInfo albumId={this.props.match.params.id}/>
                        </div>
                        
                    </div>
                    </div>
                </div>
    }
}

export default graphql(fetchAlbum, {
    options: (props) => { return { variables: {id:  props.match.params.id } } }
})(AlbumBrowser)