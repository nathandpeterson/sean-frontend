import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import fetchAlbum from '../queries/fetchAlbum'
import AlbumInfo from './AlbumInfo'
import CoverImage from './CoverImage'
import { BrowserRouter, Route } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { flipInY, flipOutY } from 'react-animations'



class AlbumBrowser extends Component {

    revealAlbumInfo = () => {
        this.props.history.push(this.props.location.pathname + '/songs')
    }

    render() {
       // Add a component to make this happen
        const flipIn = keyframes`${flipInY}`
        const FlippyDiv = styled.div`
            animation: 1.5s ${flipIn};`

        const { album } = this.props.data
        if(!album) {return <div> Loading... </div>}
    
        return (<div onClick={this.revealAlbumInfo}>
                    <FlippyDiv>
                      <CoverImage  album={ album }/>
                    </FlippyDiv>
                     </div>)     
    }

}

export default graphql(fetchAlbum, {
    options: (props) => { return { variables: {id:  props.match.params.id } } }
})(AlbumBrowser)





