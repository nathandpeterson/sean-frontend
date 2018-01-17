import React, { Component } from 'react'

class SongProgress extends Component {
    constructor(props) {
        super(props)
        this.state = {style: {width: '0%'} }
    }
    componentWillReceiveProps(props){
        let progressPercent = (this.props.current * 100).toFixed(2)
        this.setState({style: {width: `${progressPercent.toString()}%`}})
    }
    render(){
        return(
             <div className="animated fadeIn progress">
                <div    className="progress-bar " 
                        role="progressbar" 
                        style={this.state.style} 
                        aria-valuenow="50" aria-valuemin="0" 
                        aria-valuemax="100">
                </div>
            </div>)    
    }
}

export default SongProgress