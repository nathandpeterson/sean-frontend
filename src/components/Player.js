import React, { Component } from 'react'
import ReactHowler from 'react-howler'
import Hands from '../audio/Hands.mp3'
import raf from 'raf' 
import SongProgress from './SongProgress'

class Player extends Component {
    constructor(props){
        super(props)
        this.state = {playing: true,
            currentSong: Hands,
            }
    }

    handleOnLoad = () => {
        this.setState({loaded: true, duration: this.player.duration() })
      }
    
    playSong = () => {
        this.state.playing ? this.setState({playing: false}) : this.setState({playing: true})
    }

    handleToggle = () => {
        this.setState({playing: !this.state.playing})
      }
    handleOnPlay = () => {this.setState({playing: true })
        this.renderSeekPos()
      }

    renderSeekPos = () => {this.setState({ seek: this.player.seek() })
        if (this.state.playing) {
          this._raf = raf(this.renderSeekPos)}
      }
    clearRAF = () => {
        raf.cancel(this._raf)
    }

    componentWillUnmount () {
        this.clearRAF()
      }
    renderPlayIcon() {
        return this.state.playing ? "fas fa-pause" : "fas fa-play"
    }
    componentWillReceiveProps({song}){
        this.setState({currentSong: song.audioURL})
    }

    render() {
        if(!this.props.song) return <div> No song, loading </div>
        return <div>
            <i onClick={this.playSong} className={this.renderPlayIcon()}> </i>
       
        {this.state.seek &&
        <SongProgress current={this.state.seek.toFixed(2) / this.state.duration.toFixed(2)}  />
        }
        <ReactHowler    src={this.state.currentSong} 
                        playing={this.state.playing}
                        onLoad={this.handleOnLoad}
                        onPlay={this.handleOnPlay}
                        onEnd={this.handleOnEnd}
                        ref={(ref) => (this.player = ref)}/>
        </div>
    }
}

export default Player