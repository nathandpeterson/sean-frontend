import React, { Component } from 'react'

class Player extends Component {

    render() {
        console.log('props in player',this.props)
        return <div className="card">
        Player
        </div>
    }
}

export default Player