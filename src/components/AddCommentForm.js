import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import PostComment from '../queries/PostComment'
import FetchSong from '../queries/FetchSong'

class AddCommentForm extends Component {
    constructor(){
        super()
        this.state ={user: '', text: ''}
    }
    commentChange = (e) => {
        this.setState({text: e.target.value})
    }
    nameChange = (e) => {
        this.setState({user: e.target.value})
    }
    submitComment =(e) => {
        e.preventDefault()   
        this.props.mutate({
            variables: {
                song_id: this.props.song_id, 
                    text: this.state.text,
                    user: this.state.user}
        }).then(() => this.setState({text: '', user: ''}))
            .then(() => this.props.toggleCommentForm())
    }
    render(){
        return <form>
                    <label htmlFor="comment-field">Add a comment</label>
                    <input  value={this.state.text} 
                            onChange={this.commentChange} 
                            id="comment-field" 
                            type="text" 
                            className="form-control"/>
                    <label htmlFor="name-field">Your name</label>
                    <input  value={this.state.user} 
                            onChange={this.nameChange} 
                            id="name-field" 
                            type="text" 
                            className="form-control"/>
                    <br />
                    <button type="submit" 
                            className="btn btn-block"
                            onClick={this.submitComment}>ADD COMMENT</button>
                </form>
    }
}



export default graphql(PostComment)(AddCommentForm)