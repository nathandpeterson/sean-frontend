import React, { Component } from 'react'
import Player from './Player'

class PlayView extends Component {
    render(){
        console.log('PLAYVIEW', this.props)
        return <div> Play View 
             <div className="row">        
                        <div className="col-1">
                     <i onClick={this.props.history.goBack} className="fas fa-arrow-left"></i>
                    </div>
                <div className="col-11">
                </div>
                </div> 
            <Player />
        </div>
    }
}

export default PlayView